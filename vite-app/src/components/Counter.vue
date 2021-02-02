<template>
  <div>
    <button @click="count++">count is: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  setup: () => {
    const count = ref(0);

    return { count };
  },
});
</script>
