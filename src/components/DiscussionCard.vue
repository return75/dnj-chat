<template>
  <div v-for="discussion in disucssions" :key="discussion.id" class="discussion-container">
      <div class="profile-container">
        <img class="profile" :src="discussion?.user?.avatar" />
        <span class="line"></span>
      </div>
      <div class="content">
        <div>
          <span class="title">{{discussion?.user?.name}}</span>
          <span class="post-time">2 hours ago</span>
        </div>
        <p>
          {{discussion.text}}
        </p>
        <div class="buttons">
          <like-button @like="likeDiscussion(discussion)"
                       @dislike="dislikeDiscussion(discussion)"
                       :like-numbers="discussion.likes"
                       :is-liked="discussion.iLikedIt"></like-button>
          <button class="reply">Reply</button>
        </div>
        <div class="replies">
          <reply-card v-for="reply in discussion.replies" :key="reply.id" :reply-data="reply"></reply-card>
        </div>
      </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import discussionsData from "../data/discussions";
import ReplyCard from "./ReplyCard.vue";
import LikeButton from "./LikeButton.vue";

export default defineComponent({
  name: "Discussion.vue",
  components: {ReplyCard, LikeButton},
  data() {
    return {
      disucssions: discussionsData
    }
  },
  methods: {
    likeDiscussion(discussion) {
      discussion.iLikedIt = true
      discussion.likes++
    },
    dislikeDiscussion(discussion) {
      discussion.iLikedIt = false
      discussion.likes--
    }
  }
  // setup() {
  //   let disucssions = discussionsData
  //   return {
  //     disucssions
  //   }
  // }
})
</script>

<style scoped lang="scss">
@import "./src/css/discussion-card";
</style>

