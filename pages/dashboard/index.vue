<template>
  <main class="p-6 space-y-10">
    <section-one />
    <section-two />
    <section-three />
  </main>
</template>

<script>
import SectionTwo from "@/components/dashboard/SectionTwo.vue";
import SectionOne from "@/components/dashboard/SectionOne.vue";
import SectionThree from "@/components/dashboard/SectionThree.vue";
export default {
  layout: "dashboard",
  components: {
    SectionTwo,
    SectionOne,
    SectionThree
  }
};
</script>
