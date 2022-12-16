<script setup lang="ts">
import { onErrorCaptured, ref } from 'vue'
const error = ref(null) as any

onErrorCaptured((err) => {
  error.value = err
})
</script>

<template>
  <div class="demo wide">
    <slot />
    <p class="demo-source-link"><a href="../../../shared/useToggle/demo.vue" target="_blank">source</a></p>
    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>