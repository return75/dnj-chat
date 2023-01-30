<template>
  <div class="new-discussion">
    <img src="" alt="" class="profile">
    <div class="discussion-topic">
      <input type="text" v-model="newTopic" placeholder="start a discussion" @keyup.enter="createNewDiscussion">
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import { ref } from 'vue'

export default defineComponent({
  name: "NewDiscussion.vue",
  setup(props, context) {
    let newTopic = ref('')
    const createNewDiscussion = () => {
      if(newTopic.value) {
        context.emit('discussionCreated', newTopic.value)
      }
    }

    const clearNewTopic = () => {
      newTopic.value = ''
    }
    return {
      newTopic, createNewDiscussion, clearNewTopic
    }
  }
})
</script>

<style scoped lang="scss">
.new-discussion {
  padding: 2rem;
  display: flex;
  align-items: center;
  background: #FAFBFC;
  img.profile {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .discussion-topic {
    margin-left: 1rem;
    flex-grow: 1;
    input {
      width: 100%;
      background: white;
      border: 1px solid #d9dddc;
      border-radius: 2px;
      height: 35px;
      padding-left: 1rem;
      &:focus {
        border: 1px solid;
      }
    }
  }
}
</style>
