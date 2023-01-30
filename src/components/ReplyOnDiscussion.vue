<template>
  <div class="new-discussion">
    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="" class="profile">
    <div class="discussion-topic">
      <input type="text" v-model="replyMessage" placeholder="Reply" @keyup.enter="replyOnDiscussion">
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import { ref } from 'vue'

export default defineComponent({
  name: "ReplyOnDiscussion.vue",
  props: {
    discussion: {
      type: Object
    }
  },
  methods: {
    replyOnDiscussion() {
      if(this.replyMessage) {
        this.discussion.replies.push({
          id: 2,
          date: Date.now(),
          user: {
            name: "Marvin McKinney",
            avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          },
          text: this.replyMessage,
          likes: 0,
          iLikedIt: false,
        })
        this.clearReplyMessage()
      }
    }
  },
  setup(props, context) {
    let replyMessage = ref('')
    const clearReplyMessage = () => {
      replyMessage.value = ''
    }
    return {
      replyMessage, clearReplyMessage
    }
  }
})
</script>

<style scoped lang="scss">
.new-discussion {
  display: flex;
  align-items: center;
  margin-top: 1rem;
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
