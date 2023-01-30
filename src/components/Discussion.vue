<template>
  <div>
    <new-discussion @discussion-created="createNewDiscussion" ref="newDiscussionRef"></new-discussion>
    <template v-for="discussion in sortedDiscussions" :key="discussion.id">
      <discussion-card :discussion="discussion"></discussion-card>
    </template>
  </div>
</template>
<script lang="ts">

import NewDiscussion from "./NewDiscussion.vue";
import DiscussionCard from './DiscussionCard.vue'
import {defineComponent} from "vue";
import IDiscussion from "./../interfaces/IDiscussion";
export default defineComponent({
  components: {DiscussionCard, NewDiscussion},
  props: {
    discussions: {
      type: Array
    }
  },
  computed: {
    sortedDiscussions() {
      return this.discussions?.sort((a, b) => b.date - a.date)
    }
  },
  methods: {
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
      this.discussions?.push(newDiscussion)
      this.clearNewTopic()
    },
    clearNewTopic(): void {
      this.$refs.newDiscussionRef?.clearNewTopic()
    }
  },
})
</script>
