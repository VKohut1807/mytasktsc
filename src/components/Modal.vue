<template>
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            {{ information.title }}
          </h1>
          <button
            @click="close"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          {{ information.text }}
        </div>
        <div class="modal-footer">
          <template v-if="information.type === 'consent'">
            <div class="form-check form-switch form-check-reverse">
              <input
                v-model="accept"
                @change="updateConsent"
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                autocomplete="off"
              />
              <label class="form-check-label" for="flexSwitchCheckChecked"
                >Please, click here and confirm your consent to
                {{ information.title }}</label
              >
            </div>
            <p v-if="accept" class="fw-bold fs-4 my-1 text-success">
              Permission granted <i class="bi bi-emoji-smile" />&nbsp;
              <button
                @click="close"
                data-bs-dismiss="modal"
                type="button"
                class="btn btn-outline-danger"
              >
                Close
              </button>
            </p>
          </template>
          <template v-if="information.type === 'send'">
            <button
              data-bs-dismiss="modal"
              type="button"
              class="btn btn-outline-danger"
            >
              Return
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTaskTscModal",
  props: {
    information: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  data() {
    return {
      accept: false,
    };
  },
  methods: {
    updateConsent() {
      this.$emit("accept-consent", {
        name: this.information.value,
        type: this.information.type,
        accept: this.accept,
      });
    },
    close() {
      this.accept = false;
    },
  },
};
</script>
