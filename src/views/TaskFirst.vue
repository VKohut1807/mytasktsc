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

import postsApi from "@/api/posts.js";
import { getItem, setItem } from "@/helpers/localStorage.js";
import { sortPerKey } from "@/helpers/utils.js";
import {
  API_URL_POSTS,
  limit,
  keyLs,
  perKey,
  orderBy,
} from "@/helpers/vars.js";

export default {
  name: "MyTaskTscTaskFirst",
  components: {
    MyTaskTscPosts,
    MyTaskTscLoading,
    MyTaskTscErrorMessage,
  },
  computed: {
    keyLs() {
      return keyLs;
    },
    limit() {
      return limit;
    },
    currentPage() {
      return Number(this.$route.query._page || "1");
    },
    startIndexArr() {
      return Number(this.currentPage * this.limit - this.limit);
    },
    endIndexArr() {
      return Number(this.startIndexArr + this.limit);
    },
  },
  watch: {
    currentPage() {
      this.fetchPosts();
    },
  },
  data() {
    return {
      posts: [],
      postsCount: 0,
      isLoading: true,
      error: null,
    };
  },

  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      try {
        const storedData = getItem(keyLs);
        if (storedData) {
          this.isLoading = false;
          this.postsCount = storedData.length;
          this.posts = storedData.slice(this.startIndexArr, this.endIndexArr);
        } else {
          postsApi.getPosts(API_URL_POSTS).then((response) => {
            const sortedPosts = sortPerKey(response, perKey, orderBy);
            setItem(keyLs, sortedPosts);
            this.isLoading = false;
            this.postsCount = sortedPosts.length;
            this.posts = sortedPosts.slice(0, this.limit);
          });
        }
      } catch (errors) {
        this.isLoading = true;
        this.error = errors;
        console.error("Error in getting data from localStorage", errors);
        return null;
      }
    },
  },
};
</script>
