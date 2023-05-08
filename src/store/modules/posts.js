import postsApi from "@/api/posts.js";

const state = {
  data: null,
  count: 0,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getPostsStart: "[posts] Get posts start",
  getPostsSuccess: "[posts] Get posts success",
  getPostsFailure: "[posts] Get posts failure",

  getPostsLength: "[posts] Get posts length",
};

export const actionTypes = {
  getPosts: "[posts] Get posts",

  getPostsLength: "[posts] Get posts length",
};

const mutations = {
  [mutationTypes.getPostsStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getPostsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getPostsFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },

  [mutationTypes.getPostsLength](state, payload) {
    state.count = payload.length;
  },
};

const actions = {
  [actionTypes.getPosts](context, { apiUrl }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getPostsStart, apiUrl);
      postsApi
        .getPosts(apiUrl)
        .then((response) => {
          context.commit(mutationTypes.getPostsSuccess, response);
          resolve(response);
        })
        .catch((result) => {
          context.commit(mutationTypes.getPostsFailure, result.message);
        });
    });
  },

  [actionTypes.getPostsLength](context, { apiUrl }) {
    return new Promise((resolve) => {
      postsApi
        .getPosts(apiUrl)
        .then((response) => {
          context.commit(mutationTypes.getPostsLength, response);
          resolve(response);
        })
        .catch((result) => {
          console.log("postsCount error", result);
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
