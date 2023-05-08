<template>
  <div>
    <div class="container page mt-5">
      <div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">
          <i class="bi bi-person-exclamation" /> WARNING!
        </h4>
        <p>
          The page you are trying to get to never existed in this reality, or
          has migrated to a parallel universe. <br />
          <i class="bi bi-capsule" />
          <router-link :to="{ name: 'contactForm' }" class="alert-link">
            Try to contacting support for help!
          </router-link>
        </p>
        <hr />
        <p class="mb-0">
          Or, try going back to home page and repeating your action.
        </p>
      </div>
      <div class="d-flex justify-content-end">
        <router-link
          type="button"
          :to="{ name: 'home' }"
          class="btn btn-primary btn-lg"
        >
          <i class="bi bi-plug" /> Return to reality
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTaskTscNotFoundPage",
};
</script>
