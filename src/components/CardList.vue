<template>
  <div class="card_list">
    <ul>
      <li class="card_item_wrap" v-for="(item, index) in lists" :key="index">
        <CardItem :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem.vue";

export default {
  name: "CardList",
  props: {
    lists: {
      type: Array,
      required: true,
    },
  },
  components: {
    CardItem,
  },
  mounted() {
    console.log(this.lists);
  },
};
</script>

<style lang="scss" scoped>
.card_list {
  padding: 0 16px;
}
</style>
