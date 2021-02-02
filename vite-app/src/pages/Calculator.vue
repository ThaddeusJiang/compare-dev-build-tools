<template>
  <main>
    <h1>Counter</h1>

    <counter />
    <counter />
    <counter />
    <counter />
    <counter />
    <router-link to="/">Home</router-link>
    &nbsp;
    <router-link to="/About">About</router-link>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Counter from "../components/Counter.vue";

export default defineComponent({
  components: {
    Counter,
  },
});
</script>
