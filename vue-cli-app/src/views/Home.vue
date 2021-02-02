<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <count />
    <count />
    <count />
    <count />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Count from "@/components/Count.vue";

export default defineComponent({
  name: "Home",
  components: {
    Count,
  },
});
</script>
