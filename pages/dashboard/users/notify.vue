<template>
  <main>
    <DashboardHeader>
      <template v-slot:action>
        <nuxt-link
          to="/dashboard/users/create-notification"
          type="button"
          class="rounded-md flex items-center no-underline gap-x-3 bg-[#0BA9B9] px-6 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          New
        </nuxt-link>
      </template>
    </DashboardHeader>
    <div class="space-y-6 mx-3 md:mx-10 my-6">
      <section class="bg-white rounded-lg lg:flex h-screen">
        <section class="lg:w-6/12 border-r border-gray-200 p-10">
          <div class="flex justify-between items-center">
            <h5 class="font-semibold text-gray-950">Messages</h5>
            <div class="flex items-center gap-x-3">
              <img src="@/assets/icons/dashboard/search.svg" alt="" />
              <select
                class="outline-none px-6 py-2 bg-gray-100 rounded-lg text-sm"
              >
                <option>All</option>
              </select>
            </div>
          </div>
          <div class="space-y-6">
            <div
              v-for="(itm, idx) in messages"
              :key="idx"
              class="cursor-pointer"
              @click="handleSelectedMessage(itm)"
            >
              <div
                class="lg:flex justify-between gap-x-3 border-b border-gray-200 py-4"
              >
                <div
                  class="lg:flex space-y-1 lg:space-y-0 justify-between gap-x-6 lg:w-10/12"
                >
                  <div>
                    <img
                      src="@/assets/img/mobileLogo.png"
                      class="lg:h-14 lg:w-20 h-10 w-10 rounded-full object-cover object-center border p-1"
                      alt=""
                    />
                  </div>
                  <div class="space-y-3">
                    <p class="font-medium text-gray-950">{{ itm.title }}</p>
                    <p class="font-medium text-sm lg:text-base text-gray-600">
                      {{ itm.desc }}
                    </p>
                  </div>
                </div>
                <div class="lg:w-2/12 flex justify-end">
                  <p class="text-sm text-gray-500">{{ itm.time }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="lg:w-6/12 border-l border-gray-200">
          <div
            class="flex justify-center items-center flex-col gap-y-4 border-y border-gray-200 px-6 lg:px-0 py-14 mt-16"
            v-if="!Object.keys(selectedMessage).length"
          >
            <img
              src="@/assets/icons/dashboard/empty-state.svg"
              class="h-32 w-60 rounded-full"
              alt=""
            />
            <p class="font-semibold text-gray-900 max-w-sm text-center">
              There is no content to display. Select a Message card to view
              details.
            </p>
          </div>
          <div v-else>
            <div
              class="flex items-center gap-x-3 border-b border-gray-300 py-4 pl-6"
            >
              <img
                src="@/assets/img/mobileLogo.png"
                class="h-10 w-10 rounded-full object-cover object-center border p-1"
                alt=""
              />
              <p class="font-semibold">{{ selectedMessage?.title }}</p>
            </div>
            <div class="space-y-6 py-6">
              <p class="text-center font-medium text-gray-500">
                15th September 2022, {{ selectedMessage?.time }}
              </p>
              <div class="border-b border-gray-300">
                <p
                  class="text-gray-800 rounded-lg font-medium leading-loose text-justify tracking-wider bg-gray-50 p-6 m-6"
                >
                  {{ selectedMessage?.desc }}
                </p>
              </div>
            </div>
            <div class="space-y-6 pl-8">
              <div class="space-y-2">
                <h6 class="text-gray-900 font-semibold">Sent to</h6>
                <div class="flex items-center gap-x-2">
                  <img
                    src="@/assets/icons/dashboard/users.svg"
                    class="h-10 w-10 rounded-full bg-white shadow p-2"
                    alt=""
                  />
                  <p class="font-medium text-gray-600 text-sm">All users</p>
                </div>
              </div>
              <div class="space-y-2">
                <h6 class="text-gray-900 font-semibold">Sent as</h6>
                <div class="flex items-center gap-x-2">
                  <img
                    src="@/assets/icons/dashboard/flash.svg"
                    class="h-10 w-10 rounded-full bg-white shadow p-2"
                    alt=""
                  />
                  <p class="font-medium text-gray-600 text-sm">Flash message</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      selectedMessage: {},
      messages: [
        {
          title: "Promo!!!",
          desc: "Hey you!!! To celebrate Nigeria’s Independence Day, we will  be offering 25% discount on every tri... ",
          time: "08:32 AM",
        },
        {
          title: "Happy Independence",
          desc: "Hey you!!! To celebrate Nigeria’s Independence Day, we will  be offering 25% discount on every tri... ",
          time: "08:32 AM",
        },
        {
          title: "Labor Day",
          desc: "Hey you!!! To celebrate Nigeria’s Independence Day, we will  be offering 25% discount on every tri... ",
          time: "08:32 AM",
        },
      ],
    };
  },
  methods: {
    handleSelectedMessage(itm) {
      this.selectedMessage = itm;
    },
  },
};
</script>

<style>
</style>
