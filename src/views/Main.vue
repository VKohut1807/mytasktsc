<template>
  <div class="container">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#tast_1"
            aria-expanded="true"
            aria-controls="tast_1"
          >
            First Task
          </button>
        </h2>
        <div id="tast_1" class="accordion-collapse collapse show">
          <div class="accordion-body">
            <ol class="list-group list-group-numbered">
              <li class="list-group-item">
                The task involves creating a query using
                <span class="text-warning bg-dark">data from fake API</span>.
              </li>
              <li class="list-group-item">
                Upon receiving the data, the data is sorted by the title key in
                alphabetical order.
              </li>
              <li class="list-group-item">
                The sorted data is added to
                <span class="text-warning bg-dark">localStorage</span> and upon
                the first visit to the page, the first 10 elements are
                displayed.
              </li>
              <li class="list-group-item">
                Pagination has been implemented, with each page displaying 10
                elements. So, after navigating to the third page, we receive
                elements 20-29 from all available elements.
              </li>
              <li class="list-group-item">
                <span class="text-warning bg-dark">Bootstrap</span> was used for
                styling the page.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#tast_1_vuex"
            aria-expanded="true"
            aria-controls="tast_1_vuex"
          >
            First Task VUEX
          </button>
        </h2>
        <div id="tast_1_vuex" class="accordion-collapse collapse show">
          <div class="accordion-body">
            <strong
              >The task was completed using
              <span class="text-warning bg-dark">Vuex</span> and
              <span class="text-warning bg-dark">'query-string' module</span
              >.</strong
            >
            <ol class="list-group list-group-numbered">
              <li class="list-group-item">
                It is a version of the first task in which data for each page is
                obtained by making
                <span class="text-warning bg-dark"
                  >a request to a fake API</span
                >
              </li>
              <li class="list-group-item">
                The request is sent with parameters such as which elements we
                need and by which key they should be sorted.
              </li>
              <li class="list-group-item">
                Pagination has been implemented, with each page displaying 10
                elements. So, after navigating to the third page, we receive
                elements 20-29 from all available elements.
              </li>
              <li class="list-group-item">
                Every time a user navigates to a new page, a new request is sent
                to the server with parameters for the required elements.
              </li>
              <li class="list-group-item">
                <span class="text-warning bg-dark">Bootstrap</span> was used for
                styling the page.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#tast_2"
            aria-expanded="true"
            aria-controls="tast_2"
          >
            Second Task
          </button>
        </h2>
        <div id="tast_2" class="accordion-collapse collapse show">
          <div class="accordion-body">
            <ol class="list-group list-group-numbered">
              <li class="list-group-item">
                The task involves creating a contact form as a
                <span class="text-warning bg-dark">Vue web application</span>.
              </li>
              <li class="list-group-item">
                The form contain the following data:
                <ol class="list-group list-group-numbered">
                  <li class="list-group-item">
                    First name (max 32 characters)
                  </li>
                  <li class="list-group-item">Last name (max 48 characters)</li>
                  <li class="list-group-item">
                    Email (required, regex to check email validity)
                  </li>
                  <li class="list-group-item">
                    Phone number (required, 6-15 characters, only digits
                    allowed)
                  </li>
                  <li class="list-group-item">
                    Message (up to 250 characters)
                  </li>
                  <li class="list-group-item">
                    Checkbox for privacy policy (required)
                  </li>
                </ol>
              </li>
              <li class="list-group-item">
                Data from the fields are stored in an object representing the
                form and storing its state.
              </li>
              <li class="list-group-item">
                In this object, each field can have rules that it must follow
                (default value, min, max, regex, required, etc.).
              </li>
              <li class="list-group-item">
                A validation system is implemented that manages the form based
                on this object (sets error status, clears the form, etc.).
              </li>
              <li class="list-group-item">
                Field notifications are displayed immediately upon entering the
                page with the task.
              </li>
              <li class="list-group-item">
                Validation occurs immediately upon entering data into the form
                (not upon attempting to submit).
              </li>
              <li class="list-group-item">
                Notifications about non-compliance with the requirement for a
                field are displayed all at once, as the goal is to show all
                these requirements for the field, for example, for an email -
                "This field is required!" and "Incorrect data!".
              </li>
              <li class="list-group-item">
                Contact form data is passed through
                <span class="text-warning bg-dark">"initialValues" props</span>,
                which will simplify displaying data for editing in the future
                (saved but not yet submitted form, for example in the user's
                personal account).
              </li>
              <li class="list-group-item">
                <span class="text-warning bg-dark">Bootstrap</span> was used for
                styling the page.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#tast_3"
            aria-expanded="true"
            aria-controls="tast_3"
          >
            Third Task
          </button>
        </h2>
        <div id="tast_3" class="accordion-collapse collapse show">
          <div class="accordion-body">
            <strong
              >It will be divided into components in the future, but for now,
              the task has been completed separately. Link to this task -
              <a href="https://vkohut1807.github.io/Landing_Page_Uber/"
                >Third Task</a
              >
            </strong>
            <ol class="list-group list-group-numbered">
              <li class="list-group-item">
                The task involves of the subpage according to the
                <span class="text-warning bg-dark">Figma mockup</span>.
              </li>
              <li class="list-group-item">
                A self-made slider with a gallery of images has been added at
                the bottom of the page.
              </li>
              <li class="list-group-item">
                The slider contains 3 slides with grids of photos according to
                the layout in the mockup.
              </li>
              <li class="list-group-item">
                Clicking on an image from the slider opens a modal window with
                that image and its description.
              </li>
              <li class="list-group-item">
                <span class="text-warning bg-dark">SCSS</span> was used to style
                the page, which was then
                <span class="text-warning bg-dark">compiled into CSS</span>.
              </li>
              <li class="list-group-item">
                The project utilizes
                <span class="text-warning bg-dark">VUE</span>, which is
                <span class="text-warning bg-dark">connected via CDN</span>.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTaskTscMain",
  components: {},
};
</script>
