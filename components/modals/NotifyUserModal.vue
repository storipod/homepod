<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-y-3 bg-black bg-opacity-50 backdrop-blur-sm"
  >
    <section class="bg-white p-6 space-y-6 max-w-screen-lg rounded-md">
      <div>
        <h1 class="text-lg text-gray-900 font-semibold">Notify user</h1>
        <p class="text-sm text-gray-500">Use this form to send a user update</p>
      </div>
      <div class="space-y-2">
        <label class="text-sm text-gray-900 font-medium"
          >Message category</label
        >
        <select
          v-model="form.category"
          class="bg-gray-50 text-sm rounded-md w-full outline-none py-3 border-gray-300 border pl-3"
        >
          <option>Violation of story policies</option>
          <option>Sharing Nudes</option>
        </select>
      </div>
      <div class="w-full space-y-2">
        <label class="text-sm font-medium">Description</label>
        <div class="mavonEditor z-0">
          <no-ssr>
            <mavon-editor
              :language="'en'"
              :toolbars="markdownOption"
              v-model="form.desc"
            />
          </no-ssr>
        </div>
      </div>
      <div class="flex justify-end items-end gap-x-3 w-full pt-6">
        <button
          @click="$emit('proceed')"
          class="bg-[#0BA9B9]text-sm w-full text-white font-medium px-6 py-2.5 rounded-lg"
        >
          Notify user
        </button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      value: "",
      markdownOption: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        mark: true,
        superscript: true,
        subscript: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
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
        category: "",
        desc: "",
      },
    };
  },
};
</script>

<style>
.spinner {
  border-radius: 50%;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

