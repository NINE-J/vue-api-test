<template>
  <div class="card_item">
    <div class="inner">
      <div class="img_wrap">
        <img class="img" :src="item.webformatURL" alt="" />
      </div>
      <ul class="tags">
        <li class="tag" v-for="(tag, index) in tags" :key="index">
          {{ tag }}
        </li>
      </ul>
      <div class="profile">
        <div class="profile_img_wrap">
          <img class="img" :src="item.userImageURL" alt="" />
        </div>
        <span class="user_name">
          {{ item.user }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tags: [],
    };
  },
  mounted() {
    this.tags = this.item.tags.split(", ");
  },
};
</script>

<style lang="scss" scoped>
.card_item {
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  filter: drop-shadow(0px 8px 16px #000);

  .inner {
  }
  .img_wrap {
    height: 192px;
    overflow: hidden;

    .img {
      width: 100%;
    }
  }

  .tags {
    display: flex;
    padding: 16px;
  }

  .profile {
    display: flex;
    align-items: center;

    .profile_img_wrap {
      display: flex;
      width: 40px;
      height: 40px;

      img {
        width: 100%;
      }
    }
  }
}
</style>
