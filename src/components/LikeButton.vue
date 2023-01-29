<template>
  <button class="like" :style="iconStyle" @click="toggleLike">
    <like-icon :fill-color="isLiked ? '#fff' : '#909AB4'"></like-icon>
    {{likeNumbers}}
  </button>
</template>

<script>
import LikeIcon from "./icons/LikeIcon.vue";
export default {
  name: "LikeButton.vue",
  components: {LikeIcon},
  props: {
    likeNumbers: {
      type: Number,
      default: 0
    },
    isLiked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconStyle() {
      if(this.isLiked) {
        return {
          backgroundColor: '#235EE7',
          color: 'white'
        }
      } else {
        return {
          backgroundColor: '#F4F5FA',
          color: 'black'
        }
      }
    }
  },
  methods: {
    toggleLike() {
      if(this.isLiked) {
        this.dislike()
      } else {
        this.like()
      }
    },
    dislike() {
      this.$emit('dislike')
    },
    like() {
      this.$emit('like')
    }
  }
}
</script>

<style scoped>
.like {
  border: none;
  background: #F4F5FA;
  color: #2d2d2d;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding: 4px 11px;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
}
</style>
