<template>
  <div id="wrap">
    <NavBar />
    <SearchBar @search="fetchList" />
    <CardList v-if="chunk" :lists="chunk" />
    <div class="btn_wrap">
      <button class="btn_prev" @click="movePage('prev')">이전</button>
      <button class="btn_next" @click="movePage('next')">다음</button>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/core/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue";
import CardList from "@/components/CardList.vue";

export default {
  name: "ApiTest",
  components: {
    NavBar,
    SearchBar,
    CardList,
  },
  methods: {
    fetchList(keyword = this.keyword, page = this.currentPage) {
      this.$axios
        .get(
          `https://pixabay.com/api/?key=17828481-17c071c7f8eadf406822fada3&q=${keyword}&image_type=photo&page=${page}`
        )
        .then((res) => {
          // interceptor에서 확인한 뒤 component에서 한 번 더 확인
          // console.log("response in component:", res);
          return res.data;
        })
        .then((object) => {
          // 응답 결과에서 필요한 데이터를 반환
          // console.log("type:", typeof object, "/ data:", object);
          this.chunk = object.hits;
          console.log(this.chunk);
        });
    },
    movePage(type) {
      if (type == "prev") {
        this.currentPage - 1 > 1 ? (this.currentPage -= 1) : (this.currentPage = 1);
        this.fetchList("", this.currentPage);
      } else {
        this.currentPage + 1 > 10 ? (this.currentPage = 9) : (this.currentPage += 1);
        this.fetchList("", this.currentPage);
      }
    },
  },
  data() {
    return {
      keyword: "",
      currentPage: 1,
      chunk: undefined,
    };
  },
  mounted() {
    this.fetchList();
  },
};
</script>

<style lang="scss" scoped>
#wrap {
  width: 100%;

  .btn_wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    width: 100%;
    height: 54px;
  }
}
</style>
