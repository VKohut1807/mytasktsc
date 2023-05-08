<template>
  <div>
    <my-task-tsc-pagination v-if="posts" :total="postsCount" :limit="limit" />
    <div v-if="posts" class="row justify-content-center">
      <div class="col col-9">
        <div class="list-group">
          <div v-for="post in posts" :key="post.id">
            <div
              class="list-group-item list-group-item-action list-group-item-info"
            >
              <div class="card card border-light">
                <div class="card-body d-flex justify-content-between">
                  <h1 class="me-3">{{ post.id }}</h1>
                  <div>
                    <h5 class="mb-1">{{ post.title }}</h5>
                    <p class="mb-1">{{ post.body }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <my-task-tsc-pagination v-if="posts" :total="postsCount" :limit="limit" />
  </div>
</template>

<script>
import MyTaskTscPagination from "@/components/Pagination.vue";

export default {
  name: "MyTaskTscPosts",
  components: {
    MyTaskTscPagination,
  },
  props: {
    postsCount: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
