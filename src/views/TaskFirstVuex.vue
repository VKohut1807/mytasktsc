<template>
  <div class="container">
    <my-task-tsc-loading v-if="isLoading" />
    <my-task-tsc-error-message v-if="error" :message="error" />
    <my-task-tsc-posts
      v-if="posts"
      :posts-count="postsCount"
      :posts="posts"
      :limit="limit"
    />
  </div>
</template>

<script>
import MyTaskTscPosts from "@/components/Posts.vue";
import MyTaskTscLoading from "@/components/Loading.vue";
import MyTaskTscErrorMessage from "@/components/ErrorMessage.vue";

import queryString from "query-string";
import { mapState } from "vuex";
import { actionTypes } from "@/store/modules/posts.js";

import { API_URL_POSTS, limit, perKey, orderBy } from "@/helpers/vars.js";

export default {
  name: "MyTaskTscTaskFirstVuex",
  components: {
    MyTaskTscPosts,
    MyTaskTscLoading,
    MyTaskTscErrorMessage,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.posts.isLoading,
      posts: (state) => state.posts.data,
      error: (state) => state.posts.error,
      postsCount: (state) => state.posts.count,
    }),
    currentPage() {
      return Number(this.$route.query._page || "1");
    },
    limit() {
      return limit;
    },
  },
  watch: {
    currentPage() {
      this.fetchPosts();
    },
  },
  created() {
    this.fetchPosts();
    this.getPostsCount();
  },
  methods: {
    fetchPosts() {
      const parsedUrl = queryString.parseUrl(API_URL_POSTS);
      const stringifiedParams = queryString.stringify({
        _page: this.currentPage,
        _limit: this.limit,
        _sort: perKey,
        _order: orderBy,
        ...parsedUrl.query,
      });
      const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
      this.$store.dispatch(actionTypes.getPosts, {
        apiUrl: apiUrlWithParams,
      });
    },
    getPostsCount() {
      this.$store.dispatch(actionTypes.getPostsLength, {
        apiUrl: API_URL_POSTS,
      });
    },
  },
};
</script>
