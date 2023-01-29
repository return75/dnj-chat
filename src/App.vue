<template>
  <div class="flex-center">
    <discussion></discussion>
  </div>
</template>
<script lang="ts">
import Discussion from './components/DiscussionCard.vue'
export default {
  components: {Discussion}
}
</script>

<style scoped>
.flex-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
