<template>
  <div class="flex-center">
    <discussion :discussions="discussions"></discussion>
  </div>
</template>
<script lang="ts">
import Discussion from './components/Discussion.vue'
import discussionsData from "./data/discussions";
import {ref} from "vue";

export default {
  components: {Discussion},
  setup() {
    const discussions = ref(discussionsData)
    return {
      discussions
    }
  },
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
