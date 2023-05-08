<template>
  <div>
    <div
      v-if="isErrors"
      class="card border-light text-dark bg-warning bg-opacity-10"
    >
      <div class="card-header mt-3 text-center">
        Warning <i class="bi bi-patch-exclamation" />
      </div>
      <div class="card-body">
        <ol class="list-group list-group-numbered">
          <li
            v-for="(errorMessage, idx) in errors"
            :key="idx"
            class="list-group-item list-group-item-light d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto overflow-hidden">
              <div>
                <small>Field: </small>
                <strong>{{ errorMessage.name }}</strong>
              </div>
              <div>
                <small>Cause: </small>
                <span class="text-danger text-wrap">{{
                  errorMessage.error
                }}</span>
              </div>

              <small
                v-if="errorMessage.example"
                class="text-dark text-opacity-50"
                >Example: {{ errorMessage.example }}</small
              >
            </div>
          </li>
        </ol>
      </div>
    </div>
    <div
      v-if="!isErrors"
      class="card border-light text-dark bg-success bg-opacity-10"
    >
      <div class="card-header mt-3 text-center">
        Perfectly <i class="bi bi-patch-check" />
      </div>
      <div class="card-body">
        <p>
          The form with the data you provided is ready to be sent to us for
          processing.
        </p>
        <p>
          Please, click the button in the form -
          <button class="btn btn-outline-success btn-sm" disabled>
            Send <i class="bi bi-balloon" />
          </button>
          , and wait for our response!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { sortPerKey } from "@/helpers/utils.js";
import { orderBy, perKeyFormErrors } from "@/helpers/vars.js";

export default {
  name: "MyTaskTscValidationErrors",
  props: {
    validationErrors: {
      type: Array,
      required: true,
    },
  },
  computed: {
    errors() {
      return sortPerKey(this.validationErrors, perKeyFormErrors, orderBy);
    },
    isErrors() {
      return this.validationErrors.length > 0;
    },
  },
};
</script>
<style></style>
