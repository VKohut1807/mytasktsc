<template>
  <nav class="navbar navbar-light bg-light p-0">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        <img src="@/assets/logo_transformed.png" height="60" />
      </router-link>
      <ul class="nav nav-pills justify-content-end">
        <li v-for="tab in tabList" :key="tab.name" class="nav-item active">
          <router-link
            class="nav-link"
            v-bind="tab"
            :class="{ active: routeName === tab.name }"
          >
            <i :class="tab.icon" />
            &nbsp; {{ tab.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MyTaskTscTopBar",
  computed: {
    routeName() {
      return this.$route.name;
    },
  },
  data() {
    return {
      tabList: [
        {
          name: "home",
          title: "Home",
          icon: "bi bi-house",
          to: { name: "home" },
        },
        {
          name: "posts",
          title: "Task",
          icon: "bi bi-1-circle",
          to: { name: "posts" },
        },
        {
          name: "postsVuex",
          title: "Task-vuex",
          icon: "bi bi-1-circle",
          to: { name: "postsVuex" },
        },
        {
          name: "contactForm",
          title: "Task",
          icon: "bi bi-2-circle",
          to: { name: "contactForm" },
        },
        {
          name: "landingPage",
          title: "Task",
          icon: "bi bi-3-circle",
          to: { name: "landingPage" },
        },
      ],
    };
  },
};
</script>
