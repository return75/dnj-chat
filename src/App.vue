<template>
  <div class="flex-center">
    <discussion></discussion>
  </div>
</template>
<script lang="ts">
import Discussion from './components/Discussion.vue'
export default {
  components: {Discussion}
}
</script>

<style scoped>
.flex-center {
  display: flex;
  justify-content: center;
}
</style>
