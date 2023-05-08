<template>
  <div class="row justify-content-center">
    <div class="card border-light text-dark bg-info bg-opacity-10 col-8">
      <div class="card-header mt-3 text-center">Contact Form</div>
      <div class="card-body">
        <form @submit.prevent="onSubmit" ref="contactForm">
          <div class="row g-3">
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  v-model.trim="form.name.value"
                  :placeholder="form.name.header"
                  :required="form.name.rules.required"
                  type="text"
                  class="form-control"
                  id="firstNameId"
                />
                <label for="firstNameId"
                  >{{ form.name.header }}
                  <span v-if="form.name.rules.required" class="text-danger"
                    >*</span
                  ></label
                >
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-floating">
                <input
                  v-model.trim="form.lastName.value"
                  :placeholder="form.lastName.header"
                  :required="form.lastName.rules.required"
                  type="text"
                  class="form-control"
                  id="lastNameId"
                />
                <label for="lastNameId"
                  >{{ form.lastName.header }}
                  <span v-if="form.lastName.rules.required" class="text-danger"
                    >*</span
                  ></label
                >
              </div>
            </div>

            <div class="col-md-12">
              <div class="form-floating">
                <input
                  v-model.trim="form.email.value"
                  :placeholder="form.email.header"
                  :required="form.email.rules.required"
                  type="email"
                  class="form-control"
                  id="emailId"
                />
                <label for="emailId"
                  >{{ form.email.header }}
                  <span v-if="form.email.rules.required" class="text-danger"
                    >*</span
                  >
                </label>
              </div>
            </div>

            <div class="col-md-12">
              <div class="form-floating">
                <input
                  v-model.trim="form.phone.value"
                  :placeholder="form.phone.header"
                  :required="form.phone.rules.required"
                  type="tel"
                  class="form-control"
                  id="phoneId"
                />
                <label for="phoneId"
                  >{{ form.phone.header }}
                  <span v-if="form.phone.rules.required" class="text-danger"
                    >*</span
                  ></label
                >
              </div>
            </div>

            <div class="col-md-12">
              <div class="form-floating">
                <textarea
                  v-model.trim="form.message.value"
                  :placeholder="form.message.header"
                  :required="form.message.rules.required"
                  class="form-control"
                  id="messageId"
                />
                <label for="messageId"
                  >{{ form.message.header }}
                  <span v-if="form.message.rules.required" class="text-danger"
                    >*</span
                  ></label
                >
              </div>
            </div>

            <div class="col-md-12">
              <my-task-tsc-modal
                v-if="information"
                :information="information"
                @accept-consent="acceptConsent"
              />
              <div class="form-floating d-flex flex-row">
                <button
                  type="button"
                  :class="
                    acceptPrivacyPolicy ? 'btn btn-success ' : 'btn btn-danger '
                  "
                ></button>
                &nbsp;
                <span
                  class="d-flex align-items-center"
                  v-if="acceptPrivacyPolicy"
                  >Thank you for giving your consent!</span
                >
                <span
                  v-if="!acceptPrivacyPolicy"
                  class="d-flex align-items-center"
                >
                  <span>Do you accept the</span>
                  <button
                    v-show="!form.privacyPolicy.rules.terms"
                    @click.prevent="
                      modalKey = form.privacyPolicy.options.terms.value
                    "
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    type="button"
                    class="btn btn-link px-1 py-0"
                  >
                    {{ form.privacyPolicy.options.terms.value }}
                  </button>
                  <span
                    v-show="
                      !(
                        form.privacyPolicy.rules.terms ||
                        form.privacyPolicy.rules.conditions
                      )
                    "
                    >and</span
                  >
                  <button
                    v-show="!form.privacyPolicy.rules.conditions"
                    @click.prevent="
                      modalKey = form.privacyPolicy.options.conditions.value
                    "
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    type="button"
                    class="btn btn-link px-1 py-0"
                  >
                    {{ form.privacyPolicy.options.conditions.value }}
                  </button>
                  <span>?</span>
                </span>
                <span
                  v-if="form.privacyPolicy.rules.required"
                  class="text-danger"
                  >&nbsp; *</span
                >
              </div>
            </div>

            <div class="text-muted fst-italic">
              <span class="text-danger">*</span> - These fields are mandatory
              fields to be completed due to the given form!
            </div>

            <div class="d-flex justify-content-end">
              <button
                class="btn btn-outline-warning me-3 col-3"
                type="button"
                @click="resetForm"
              >
                Reset form
              </button>
              <button
                :disabled="isSendMessage"
                :data-bs-toggle="!isSendMessage ? 'modal' : null"
                :data-bs-target="!isSendMessage ? '#staticBackdrop' : null"
                class="btn btn-outline-success col-3"
                type="submit"
              >
                Send <i class="bi bi-balloon" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="col-4">
      <my-task-tsc-validation-errors
        v-if="validationErrors"
        :validation-errors="validationErrors"
      />
    </div>
  </div>
</template>

<script>
import MyTaskTscModal from "@/components/Modal.vue";
import MyTaskTscValidationErrors from "@/components/ValidationErrors.vue";

export default {
  name: "MyTaskTscContactForm",
  components: { MyTaskTscModal, MyTaskTscValidationErrors },
  props: {
    initialValues: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isSendMessage() {
      return this.validateForm && !this.sendMessage.isSubmitting ? false : true;
    },
    information() {
      switch (this.modalKey) {
        case "terms":
          return this.form.privacyPolicy.options.terms;
        case "conditions":
          return this.form.privacyPolicy.options.conditions;
        case "sendMessage":
          return this.sendMessage.successfully;
        case "failedMessage":
          return this.sendMessage.failed;
        default:
          return {};
      }
    },
    acceptPrivacyPolicy() {
      return this.form.privacyPolicy.rules.terms === true &&
        this.form.privacyPolicy.rules.conditions === true
        ? true
        : false;
    },
    validateForm() {
      return this.validationErrors.length < 1 ? true : false;
    },
    validationErrors() {
      return [
        ...this.isFieldRequired,
        ...this.isFieldMinLength,
        ...this.isFieldMaxLength,
        ...this.isFieldRegex,
        ...this.isFieldConsent,
      ];
    },
    isFieldRequired() {
      const form = this.form;
      const errors = [];
      for (const field in form) {
        if (
          (form[field].rules.required &&
            form[field].value === null &&
            !this.acceptPrivacyPolicy) ||
          (form[field].rules.required && form[field].value === "")
        ) {
          errors.push({
            name: form[field].header,
            error: "This field is required!",
          });
        }
      }
      return errors;
    },
    isFieldMinLength() {
      const form = this.form;
      const errors = [];
      for (const field in form) {
        if (
          form[field].rules.min &&
          form[field].value.length < form[field].rules.min
        ) {
          errors.push({
            name: form[field].header,
            error: `Minimum ${form[field].rules.min} characters required!`,
          });
        }
      }
      return errors;
    },
    isFieldMaxLength() {
      const form = this.form;
      const errors = [];
      for (const field in form) {
        if (
          form[field].rules.max &&
          form[field].value.length > form[field].rules.max
        ) {
          errors.push({
            name: form[field].header,
            error: `Maximum ${form[field].rules.max} characters allowed!`,
          });
        }
      }
      return errors;
    },
    isFieldRegex() {
      const form = this.form;
      const errors = [];
      for (const field in form) {
        if (
          form[field].rules.regex &&
          !new RegExp(form[field].rules.regex).test(form[field].value)
        ) {
          errors.push({
            name: form[field].header,
            error: "Incorrectly data!",
            example: form[field].example,
          });
        }
      }
      return errors;
    },
    isFieldConsent() {
      const form = this.form;
      const errors = [];

      if (!this.acceptPrivacyPolicy) {
        errors.push({
          name: form.privacyPolicy.header,
          error:
            "You must agree to all parts of the terms of the privacy policy!",
        });
      }
      return errors;
    },
  },
  data() {
    return {
      modalKey: null,
      sendMessage: {
        isSubmitting: false,
        successfully: {
          title: "Your Message",
          text: "Your message has been successfully sent. Have a nice day!",
          type: "send",
          value: "sendMessage",
        },
        failed: {
          title: "Your Message",
          text: "Oops something went wrong, your message could not be sent. Try again!",
          type: "send",
          value: "failedMessage",
        },
      },
      form: {
        name: {
          header: "Name",
          value: this.initialValues.name,
          example: "Andrzej",
          rules: {
            required: false,
            max: 32,
          },
        },
        lastName: {
          header: "Last Name",
          value: this.initialValues.lastName,
          example: "Mozzi",
          rules: {
            required: false,
            max: 48,
          },
        },
        email: {
          header: "Email",
          value: this.initialValues.email,
          example: "andrzej123@gmail.com",
          rules: {
            required: true,
            regex: /^([A-Za-z0-9_.-])+@([A-Za-z0-9_-]+\.)+([A-Za-z]{2,4})$/,
          },
        },
        phone: {
          header: "Phone Number",
          value: this.initialValues.phone,
          example: "1234567890",
          rules: {
            required: true,
            min: 6,
            max: 15,
            regex: /^[0-9]{6,15}$/,
          },
        },
        message: {
          header: "Message",
          value: this.initialValues.message,
          example: "Some text",
          rules: {
            required: false,
            max: 250,
          },
        },
        privacyPolicy: {
          header: "Privacy Policy",
          value: this.initialValues.privacyPolicy.privacyPolicy,
          options: {
            terms: {
              title: "Terms",
              text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nam suscipit itaque qui aperiam earum nisi optio facere, rem provident enim, eos dolorum quia necessitatibus numquam vitae laboriosam! Unde, maxime!",
              type: "consent",
              value: "terms",
            },
            conditions: {
              title: "Conditions",
              text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nam suscipit itaque qui aperiam earum nisi optio facere, rem provident enim, eos dolorum quia necessitatibus numquam vitae laboriosam! Unde, maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nam suscipit itaque qui aperiam earum nisi optio facere, rem provident enim, eos dolorum quia necessitatibus numquam vitae laboriosam! Unde, maxime!",
              type: "consent",
              value: "conditions",
            },
          },
          rules: {
            required: true,
            terms: this.initialValues.privacyPolicy.terms,
            conditions: this.initialValues.privacyPolicy.conditions,
          },
        },
      },
    };
  },
  methods: {
    onSubmit() {
      if (!this.validateForm) {
        return false;
      }
      this.sendMessage.isSubmitting = true;
      const messageToSend = [
        {
          header: this.form.name.header,
          value: this.form.name.value,
        },
        {
          header: this.form.lastName.header,
          value: this.form.lastName.value,
        },
        {
          header: this.form.email.header,
          value: this.form.email.value,
        },
        {
          header: this.form.phone.header,
          value: this.form.phone.value,
        },
        {
          header: this.form.message.header,
          value: this.form.message.value,
        },
        {
          header: this.form.privacyPolicy.header,
          value: this.acceptPrivacyPolicy,
        },
      ];
      try {
        this.$emit("form-submit", messageToSend);
        this.resetForm();
        this.modalKey = this.sendMessage.successfully.value;
        this.sendMessage.isSubmitting = false;
      } catch (error) {
        this.modalKey = this.sendMessage.failed.value;
        console.error("Failed to send", error);
        this.sendMessage.isSubmitting = false;
      }
    },
    resetForm() {
      for (const field in this.form) {
        this.form[field].value = "";
      }
      this.form.privacyPolicy.value = null;
      this.form.privacyPolicy.rules.terms = false;
      this.form.privacyPolicy.rules.conditions = false;
    },
    acceptConsent(consent) {
      if (!consent) {
        return false;
      }
      return (this.form.privacyPolicy.rules[consent.name] = consent.accept);
    },
  },
};
</script>
