<template>
  <div class="container">
    <my-task-tsc-contact-form
      :initial-values="initialValues"
      @form-submit="onSubmit"
    />
  </div>
</template>

<script>
import MyTaskTscContactForm from "@/components/ContactForm.vue";

export default {
  name: "MyTaskTscTaskSecond",
  components: {
    MyTaskTscContactForm,
  },
  data() {
    return {
      initialValues: {
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        privacyPolicy: {
          privacyPolicy: null,
          terms: false,
          conditions: false,
        },
      },
    };
  },
  computed: {},
  methods: {
    onSubmit(formInputs) {
      console.log("The message has been sent on server", formInputs);
    },
  },
};
</script>
