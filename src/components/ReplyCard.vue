<template>
  <div class="discussion-container">
    <div class="profile-container">
      <img class="profile" :src="replyData?.user?.avatar" />
    </div>
    <div class="content">
      <div>
        <span class="title">{{replyData?.user?.name}}</span>
        <span class="post-time">{{getRelativeTime(replyData.date)}}</span>
      </div>
      <p>
        {{replyData.text}}
      </p>
      <div class="buttons">
        <like-button
           @like="likeDiscussion(replyData)"
           @dislike="dislikeDiscussion(replyData)"
           :like-numbers="replyData.likes"
           :is-liked="replyData.iLikedIt">
        </like-button>
      </div>
    </div>
  </div>
</template>

<script>
import getRelativeTime from "./../js/relative-time.js"
import LikeButton from "./LikeButton.vue";
export default {
  name: "Reply.vue",
  components: {LikeButton},
  props: {
    replyData: {
      type: Object
    }
  },
  methods: {
    likeDiscussion(reply) {
      reply.iLikedIt = true
      reply.likes++
    },
    dislikeDiscussion(reply) {
      reply.iLikedIt = false
      reply.likes--
    },
    getRelativeTime,
  }
}
</script>

<style scoped lang="scss">
@import "./src/css/discussion-card";
.discussion-container {
  border: none !important;
  width: unset !important;
  max-width: 100% !important;
  padding: 0 !important;
}
.profile-container {
  justify-content: flex-start !important;
}
</style>
