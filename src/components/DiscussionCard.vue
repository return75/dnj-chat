<template>
  <div class="container">
    <div class="discussion-container">
      <div class="profile-container">
        <img class="profile" :src="discussion?.user?.avatar" />
        <span class="line"></span>
      </div>
      <div class="content">
        <div>
          <span class="title">{{discussion?.user?.name}}</span>
          <span class="post-time">{{getTimeFromNow(discussion.date)}}</span>
        </div>
        <p>
          {{discussion.text}}
        </p>
        <div class="buttons">
          <like-button @like="likeDiscussion(discussion)"
                       @dislike="dislikeDiscussion(discussion)"
                       :like-numbers="discussion.likes"
                       :is-liked="discussion.iLikedIt"></like-button>
          <button class="reply" @click="toggleReply">Reply</button>
        </div>
        <div class="replies">
          <reply-card v-for="reply in discussion.replies" :key="reply.id" :reply-data="reply"></reply-card>
        </div>
        <reply-on-discussion v-if="isReplyVisible" :discussion="discussion" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import ReplyCard from "./ReplyCard.vue";
import LikeButton from "./LikeButton.vue";
import NewDiscussion from "./NewDiscussion.vue";
import {ref} from "vue";
import IDiscussion from './../interfaces/IDiscussion'
import ReplyOnDiscussion from './../components/ReplyOnDiscussion.vue'

export default defineComponent({
  name: "Discussion.vue",
  components: {ReplyCard, NewDiscussion, LikeButton, ReplyOnDiscussion},
  props: {
    discussion: {
      type: Object
    }
  },
  methods: {
    likeDiscussion(discussion: IDiscussion) {
      discussion.iLikedIt = true
      discussion.likes++
    },
    dislikeDiscussion(discussion: IDiscussion) {
      discussion.iLikedIt = false
      discussion.likes--
    },
    getTimeFromNow(timeStamp: number): void {

    },
    toggleReply() {
      this.isReplyVisible = !this.isReplyVisible
    },
  },
  setup() {
    const isReplyVisible = ref(false)
    return {
      isReplyVisible
    }
  },
})
</script>

<style scoped lang="scss">
@import "./src/css/discussion-card";
</style>

