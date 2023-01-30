<template>
  <div class="container">
    <new-discussion @discussion-created="createNewDiscussion" ref="newDiscussionRef"></new-discussion>
    <div v-for="discussion in sortedDiscussion" :key="discussion.id" class="discussion-container">
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
          <button class="reply">Reply</button>
        </div>
        <div class="replies">
          <reply-card v-for="reply in discussion.replies" :key="reply.id" :reply-data="reply"></reply-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted} from "vue";
import discussionsData from "../data/discussions";
import ReplyCard from "./ReplyCard.vue";
import LikeButton from "./LikeButton.vue";
import NewDiscussion from "./NewDiscussion.vue";
import {ref} from "vue";
import IDiscussion from './../interfaces/IDiscussion'

export default defineComponent({
  name: "Discussion.vue",
  components: {ReplyCard, NewDiscussion, LikeButton},
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
    createNewDiscussion(newTopic: string) {
      let newDiscussion: IDiscussion = {
        id: 2,
        date: Date.now(),
        user: {
          name: "Marvin McKinney",
          avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        },
        text: newTopic,
        likes: 0,
        iLikedIt: false,
        replies: []
      }
      this.discussions.push(newDiscussion)
      this.clearNewTopic()
    },
    clearNewTopic() {
      this.$refs.newDiscussionRef?.clearNewTopic()
    }
  },
  setup() {
    const discussions = ref(discussionsData)
    const sortedDiscussion = computed(() => {
      return discussions.value.sort((a, b) => b.date - a.date)
    })
    return {
      discussions, sortedDiscussion
    }
  },
})
</script>

<style scoped lang="scss">
@import "./src/css/discussion-card";
</style>

