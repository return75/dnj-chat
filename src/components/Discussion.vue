<template>
  <div class="discussion-container">
      <div class="profile-container">
        <img class="profile" />
        <span class="line"></span>
      </div>
      <div class="content">
        <div>
          <span class="title">sample title</span>
          <span class="post-time">2 hours ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut blanditiis consequuntur cupiditate
          dolorem doloribus eaque error eveniet impedit, laudantium modi molestiae molestias necessitatibus porro
          praesentium provident quod saepe voluptatibus.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut blanditiis consequuntur cupiditate
          dolorem doloribus eaque error eveniet impedit, laudantium modi molestiae molestias necessitatibus porro
          praesentium provident quod saepe voluptatibus.
        </p>
        <div class="buttons">
          <button class="like">
            <like-icon width="25" :fill-color="'#959596'"></like-icon>
            3
          </button>
          <button class="reply">Reply</button>
        </div>
      </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import discussions from "../data/discussions";
import Reply from "./Reply.vue";
import LikeIcon from "./icons/LikeIcon.vue";

export default defineComponent({
  name: "Discussion.vue",
  components: {Reply, LikeIcon},
})
</script>

<style scoped lang="scss">
.discussion-container {
  display: flex;
  width: 500px;
  max-width: 90vw;
  .profile-container {
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img.profile {
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
    .line {
      margin-top: 1rem;
      flex-grow: 1;
      width: 2px;
      background: #f7ebeb;
    }
  }
  .content {
    margin-left: 1rem;
    text-align: left;
    .title {
      font-weight: bolder;
    }
    .post-time {
      color: gray;
      margin-left: 5px;
    }
    p {
      margin-top: 5px;
      text-align: justify;
    }
    .buttons {
      margin-top: 5px;
      display: flex;
      gap: 12px;
      .reply {
        background: none;
        border: none;
        color: #014cb9;
        cursor: pointer;
      }
      .like {
        border: none;
        background: #d9e4e8;
        color: #2d2d2d;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        padding: 4px 11px;
        justify-content: center;
        gap: 4px;
        cursor: pointer;
      }
    }
  }
}
</style>

