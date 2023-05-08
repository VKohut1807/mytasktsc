<template>
  <div id="app" class="vh-100 overflow-hidden d-flex flex-column">
    <div class="sticky-top"><my-task-tsc-top-bar /></div>
    <div class="flex-grow-1 overflow-auto"><router-view></router-view></div>
  </div>
</template>

<script>
import MyTaskTscTopBar from "@/components/TopBar.vue";

export default {
  name: "App",
  components: {
    MyTaskTscTopBar,
  },
};
</script>
