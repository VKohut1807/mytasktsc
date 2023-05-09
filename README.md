# mytasktsc

![gg9804768227](https://user-images.githubusercontent.com/48514587/236924801-8aab9cc1-51bd-4ce2-bb09-a125ba567c69.gif)

---

<br>

## DESCRIPTION:

### First Task:

- The task involves creating a query using `data from fake API`.

- Upon receiving the data, the data is sorted by the title key in alphabetical order.

- The sorted data is added to `localStorage` and upon the first visit to the page, the first 10 elements are displayed.

- Pagination has been implemented, with each page displaying 10 elements. So, after navigating to the third page, we receive elements 20-29 from all available elements.

- `Bootstrap` was used for styling the page.

<br>

### First Task `VUEX`:

**The task was completed using `Vuex` and `query-string module`.**

- It is a version of the first task in which data for each page is obtained by making `a request to a fake API`.

- The request is sent with parameters such as which elements we need and by which key they should be sorted.

- Pagination has been implemented, with each page displaying 10 elements. So, after navigating to the third page, we receive elements 20-29 from all available elements.

- Every time a user navigates to a new page, a new request is sent to the server with parameters for the required elements.

- `Bootstrap` was used for styling the page.

<br>

### Second Task:

- The task involves creating a contact form as a `Vue web application`.

- The form contain the following data:

  - First name (max 32 characters)

  - Last name (max 48 characters)

  - Email (required, regex to check email validity)

  - Phone number (required, 6-15 characters, only digits allowed)

  - Message (up to 250 characters)

  - Checkbox for privacy policy (required)

- Data from the fields are stored in an object representing the form and storing its state.

- In this object, each field can have rules that it must follow (default value, min, max, regex, required, etc.).

- A validation system is implemented that manages the form based on this object (sets error status, clears the form, etc.).

- Field notifications are displayed immediately upon entering the page with the task.

- Validation occurs immediately upon entering data into the form (not upon attempting to submit).

- Notifications about non-compliance with the requirement for a field are displayed all at once, as the goal is to show all these requirements for the field, for example, for an email - "This field is required!" and "Incorrect data!".

- Contact form data is passed through `"initialValues" props`, which will simplify displaying data for editing in the future (saved but not yet submitted form, for example in the user's personal account).

- `Bootstrap` was used for styling the page.

<br>

---

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
