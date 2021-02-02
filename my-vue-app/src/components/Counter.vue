<template>
  <div>
    <button @click="count++">count is: {{ count }}</button>
    <button @click="count2++">count2 is: {{ count2 }}</button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  setup: () => {
    const count = ref(0);
    const count2 = ref(0);
    return { count, count2 };
  },
});
</script>
