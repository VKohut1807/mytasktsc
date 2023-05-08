<template>
  <ul class="my-3 pagination justify-content-center">
    <li
      v-for="page in pages"
      :key="page"
      class="page-item"
      :class="{ active: currentPage === page }"
    >
      <router-link
        :to="{ path: baseUrl, query: { _page: page } }"
        class="page-link"
      >
        {{ page }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { range } from "@/helpers/utils.js";
export default {
  name: "MyTaskTscPagination",
  props: {
    total: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
  },
  computed: {
    currentPage() {
      return Number(this.$route.query._page || "1");
    },
    baseUrl() {
      return this.$route.path;
    },
    pages() {
      const pagesCount = Math.ceil(this.total / this.limit);
      return range(1, pagesCount);
    },
  },
};
</script>
