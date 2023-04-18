<template>
  <div class="search_bar_wrap">
    <input type="text" v-model="keyword" placeholder="검색어를 입력해주세요." />
    <button class="btn_search" @click="search">검색</button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    search() {
      this.$emit("search", this.keyword, 1);
    },
  },
  data() {
    return {
      keyword: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.search_bar_wrap {
  padding: 16px;
}
</style>
