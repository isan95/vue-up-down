<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">UpDown</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-
        controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link"
              >Inicio <span class="sr-only">(current)</span></router-link
            >
            <!-- <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a> -->
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Subidos por mi</router-link>
            <!-- <a class="nav-link" href="#">Subidos por mi</a> -->
          </li>
          <li>
            <router-link to="/" class="nav-link">Recientes</router-link>
            <!-- <a class="nav-link">Recientes</a> -->
          </li>
          <li v-if="isAdmin">
            <router-link to="register" class="nav-link"
              >Crear usuario</router-link
            >
          </li>

          <li v-else>
            <router-link to="/">Register</router-link> |
            <router-link to="/">Login</router-link>
          </li>
        </ul>

        <button
          v-if="!isUser"
          id="btn-modal-upload"
          class="btn btn-outline-success my-2 my-sm-0"
          type="button"
          data-toggle="modal"
          data-target="#modalUpload"
        >
          <b-icon icon="cloud-upload" />
        </button>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Buscar
          </button>
        </form>

        <div class="dropdown-user dropdown">
          <Button
            class="dropdown-toggle btn btn-link"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="mr-2 d-none d-lg-inline text-gray-600 small">
              {{username2}}</span
            >
            <img
              id="img-profile"
              class="img-profile rounded-circle"
              src="../assets/images/iconfinder_00-ELASTOFONT-STORE-READY_user-circle_2703062.png"
            />
          </Button>
          <div class="dropdown-menu bg-dark" aria-labelledby="userDropdown">
            <a class="dropdown-item" href="">
              Perfil
            </a>

            <div class="dropdown-divider"></div>
            <button id = "button-logout" v-if="currentUser" @click.prevent="logOut" class="dropdown-item bg-dark" href="">
              Cerrar sesion
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div
      id="modalUpload"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="Subirarchivo"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="Subirarchivo">Subir archivo</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <Upload />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Upload from "./Upload.vue";
export default {
  components: { Upload },
  name: "NavBar",
  data() {
    return { username2 : this.$store.state.auth.user.username }
  },

  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },

    isUser() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_USER");
      }
      return false;
    },

    isModerator() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_MODERATOR");
      }
      return false;
    },

    isAdmin() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_ADMIN");
      }
      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
@charset "UTF-8";
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400|Passion+One:400");

/*
	Full Motion by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

/* Reset */

html,
body,
div,
a,
ol,
ul,
li,
form,
nav {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

nav {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

body {
  -webkit-text-size-adjust: none;
}

/* Box Model */

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

/* Basic */

@-ms-viewport {
  width: device-width;
}

body {
  -ms-overflow-style: scrollbar;
}

@media screen and (max-width: 480px) {
  html,
  body {
    min-width: 320px;
  }
}

body {
  background: #202024;
}

body.is-loading *,
body.is-loading *:before,
body.is-loading *:after {
  -moz-animation: none !important;
  -webkit-animation: none !important;
  -ms-animation: none !important;
  animation: none !important;
  -moz-transition: none !important;
  -webkit-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}

/* Type */

body,
input,
select {
  color: rgba(255, 255, 255, 0.75);
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14pt;
  font-weight: 300;
  line-height: 1.65;
}

@media screen and (max-width: 1680px) {
  body,
  input,
  select {
    font-size: 11pt;
  }
}

@media screen and (max-width: 1280px) {
  body,
  input,
  select {
    font-size: 11pt;
  }
}

@media screen and (max-width: 980px) {
  body,
  input,
  select {
    font-size: 12pt;
  }
}

@media screen and (max-width: 736px) {
  body,
  input,
  select {
    font-size: 12pt;
  }
}

@media screen and (max-width: 480px) {
  body,
  input,
  select {
    font-size: 12pt;
  }
}

a {
  -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  border-bottom: 1px dotted;
  outline: 0;
}

a:hover {
  color: #fff;
  border: none;
}

p {
  margin: 0 0 2em 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #fff;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 0 1em 0;
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
  color: inherit;
  text-decoration: none;
}

h2 {
  font-size: 1.75em;
}

h3 {
  font-size: 1.35em;
}

h4 {
  font-size: 1.1em;
}

h5 {
  font-size: 0.9em;
}

h6 {
  font-size: 0.7em;
}

.align-left {
  text-align: left;
}

.align-center {
  text-align: center;
}

.align-right {
  text-align: right;
}

form {
  margin: 0 0 2em 0;
}

input[type="text"],
input[type="password"],
input[type="email"],
input[type="tel"],
select {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background: rgba(144, 144, 144, 0.075);
  border-radius: 4px;
  border: none;
  border: solid 1px rgba(144, 144, 144, 0.25);
  color: inherit;
  display: block;
  outline: 0;
  padding: 0 1em;
  text-decoration: none;
  width: 100%;
}

input[type="text"]:invalid,
input[type="password"]:invalid,
input[type="email"]:invalid,
input[type="tel"]:invalid,
select:invalid {
  box-shadow: none;
}

input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus,
input[type="tel"]:focus,
select:focus,
textarea:focus {
  border-color: #ff8686;
  box-shadow: 0 0 0 1px #ff8686;
}

.select-wrapper {
  text-decoration: none;
  display: block;
  position: relative;
}

.select-wrapper:before {
  content: "";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-weight: normal;
  text-transform: none !important;
}

.select-wrapper:before {
  color: rgba(144, 144, 144, 0.25);
  display: block;
  height: 2.75em;
  line-height: 2.75em;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 2.75em;
}

.select-wrapper select::-ms-expand {
  display: none;
}

input[type="text"],
input[type="password"],
input[type="email"],
select {
  height: 2.75em;
}

input[type="checkbox"],
input[type="radio"] {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  display: block;
  float: left;
  margin-right: -2em;
  opacity: 0;
  width: 1em;
  z-index: -1;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  font-weight: 300;
  padding-left: 2.4em;
  padding-right: 0.75em;
  position: relative;
}

input[type="checkbox"] + label:before,
input[type="radio"] + label:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-weight: normal;
  text-transform: none !important;
}

input[type="checkbox"] + label:before,
input[type="radio"] + label:before {
  background: rgba(144, 144, 144, 0.075);
  border-radius: 4px;
  border: solid 1px rgba(144, 144, 144, 0.25);
  content: "";
  display: inline-block;
  height: 1.65em;
  left: 0;
  line-height: 1.58125em;
  position: absolute;
  text-align: center;
  top: 0;
  width: 1.65em;
}

input[type="checkbox"]:checked + label:before,
input[type="radio"]:checked + label:before {
  background: #ff8686;
  border-color: #ff8686;
  color: #ffffff;
  content: "\f00c";
}

input[type="checkbox"]:focus + label:before,
input[type="radio"]:focus + label:before {
  border-color: #ff8686;
  box-shadow: 0 0 0 1px #ff8686;
}

input[type="checkbox"] + label:before {
  border-radius: 4px;
}

input[type="radio"] + label:before {
  border-radius: 100%;
}

::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.5) !important;
  opacity: 1;
}

:-moz-placeholder {
  color: rgba(255, 255, 255, 0.5) !important;
  opacity: 1;
}

::-moz-placeholder {
  color: rgba(255, 255, 255, 0.5) !important;
  opacity: 1;
}

:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.5) !important;
  opacity: 1;
}

.formerize-placeholder {
  color: rgba(255, 255, 255, 0.5) !important;
  opacity: 1;
}

/* Box */

.box {
  border-radius: 4px;
  margin-bottom: 2em;
  background: #2c2c32;
  text-align: center;
}

.box > :last-child,
.box > :last-child > :last-child,
.box > :last-child > :last-child > :last-child {
  margin-bottom: 0;
}

.box .image.fit {
  margin: 0;
}

.box .image img {
  border-radius: 4px 4px 0 0;
}

.box .inner {
  padding: 1.5em;
  width: 100% !important;
}

@media screen and (max-width: 480px) {
  .box .inner {
    padding: 1em;
  }
}

.box.alt {
  border: 0;
  border-radius: 0;
  padding: 0;
}

/* Icon */

.icon {
  text-decoration: none;
  border-bottom: none;
  position: relative;
}

.icon:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-weight: normal;
  text-transform: none !important;
}

.icon > .label {
  display: none;
}

/* Image */

.image {
  border-radius: 4px;
  border: 0;
  display: inline-block;
  position: relative;
}

.image img {
  border-radius: 4px;
  display: block;
}

.image.left,
.image.right {
  max-width: 40%;
}

.image.left img,
.image.right img {
  width: 100%;
}

.image.left {
  float: left;
  padding: 0 1.5em 1em 0;
  top: 0.25em;
}

.image.right {
  float: right;
  padding: 0 0 1em 1.5em;
  top: 0.25em;
}

.image.fit {
  display: block;
  margin: 0 0 2em 0;
  width: 100%;
}

.image.fit img {
  width: 100%;
}

.image.main {
  display: block;
  margin: 0 0 3em 0;
  width: 100%;
}

.image.main img {
  width: 100%;
}

/* List */

ol {
  list-style: decimal;
  margin: 0 0 2em 0;
  padding-left: 1.25em;
}

ol li {
  padding-left: 0.25em;
}

ul {
  list-style: disc;
  margin: 0 0 2em 0;
  padding-left: 1em;
}

ul li {
  padding-left: 0.5em;
}

ul.alt {
  list-style: none;
  padding-left: 0;
}

ul.alt li {
  border-top: solid 1px rgba(144, 144, 144, 0.25);
  padding: 0.5em 0;
}

ul.alt li:first-child {
  border-top: 0;
  padding-top: 0;
}

ul.icons {
  cursor: default;
  list-style: none;
  padding-left: 0;
}

ul.icons li {
  display: inline-block;
  text-align: center;
  padding-left: 0;
  padding-right: 1em;
}

ul.icons li a {
  display: block;
  border-radius: 100%;
  margin: 0;
  padding: 0.5em;
  border: solid 1px rgba(144, 144, 144, 0.25);
  color: rgba(144, 144, 144, 0.25);
}

ul.icons li a:before {
  font-size: 1.5em;
  display: block;
  width: 1.5em;
  height: 1.5em;
  line-height: 1.5em;
}

ul.icons li a:hover {
  background-color: #202024;
  color: #fff;
}

ul.icons li:last-child {
  padding-right: 0;
}

ul.actions {
  cursor: default;
  list-style: none;
  padding-left: 0;
}

ul.actions li {
  display: inline-block;
  padding: 0 1em 0 0;
  vertical-align: middle;
}

ul.actions li:last-child {
  padding-right: 0;
}

ul.actions.small li {
  padding: 0 0.5em 0 0;
}

ul.actions.vertical li {
  display: block;
  padding: 1em 0 0 0;
}

ul.actions.vertical li:first-child {
  padding-top: 0;
}

ul.actions.vertical li > * {
  margin-bottom: 0;
}

ul.actions.vertical.small li {
  padding: 0.5em 0 0 0;
}

ul.actions.vertical.small li:first-child {
  padding-top: 0;
}

ul.actions.fit {
  display: table;
  margin-left: -1em;
  padding: 0;
  table-layout: fixed;
  width: calc(100% + 1em);
}

ul.actions.fit li {
  display: table-cell;
  padding: 0 0 0 1em;
}

ul.actions.fit li > * {
  margin-bottom: 0;
}

ul.actions.fit.small {
  margin-left: -0.5em;
  width: calc(100% + 0.5em);
}

ul.actions.fit.small li {
  padding: 0 0 0 0.5em;
}

@media screen and (max-width: 480px) {
  ul.actions {
    margin: 0 0 2em 0;
  }

  ul.actions li {
    padding: 1em 0 0 0;
    display: block;
    text-align: center;
    width: 100%;
  }

  ul.actions li:first-child {
    padding-top: 0;
  }

  ul.actions li > * {
    width: 100%;
    margin: 0 !important;
  }

  ul.actions li > *.icon:before {
    margin-left: -2em;
  }

  ul.actions.small li {
    padding: 0.5em 0 0 0;
  }

  ul.actions.small li:first-child {
    padding-top: 0;
  }
}

/* Button */

input[type="submit"],
input[type="reset"],
input[type="button"],
button,
.button {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  background-color: #70c7be;
  border-radius: 4px;
  border: 0;
  color: #ffffff !important;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  height: 2.85em;
  line-height: 2.95em;
  padding: 0 1.5em;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
}

input[type="submit"]:hover,
input[type="reset"]:hover,
input[type="button"]:hover,
button:hover,
.button:hover {
  background-color: #82cec6;
}

input[type="submit"]:active,
input[type="reset"]:active,
input[type="button"]:active,
button:active,
.button:active {
  background-color: #5ec0b6;
}

input[type="submit"].icon,
input[type="reset"].icon,
input[type="button"].icon,
button.icon,
.button.icon {
  padding-left: 1.35em;
}

input[type="submit"].icon:before,
input[type="reset"].icon:before,
input[type="button"].icon:before,
button.icon:before,
.button.icon:before {
  margin-right: 0.5em;
}

input[type="submit"].fit,
input[type="reset"].fit,
input[type="button"].fit,
button.fit,
.button.fit {
  display: block;
  margin: 0 0 1em 0;
  width: 100%;
}

input[type="submit"].small,
input[type="reset"].small,
input[type="button"].small,
button.small,
.button.small {
  font-size: 0.8em;
}

input[type="submit"].big,
input[type="reset"].big,
input[type="button"].big,
button.big,
.button.big {
  font-size: 1.35em;
}

input[type="submit"].disabled,
input[type="submit"]:disabled,
input[type="reset"].disabled,
input[type="reset"]:disabled,
input[type="button"].disabled,
input[type="button"]:disabled,
button.disabled,
button:disabled,
.button.disabled,
.button:disabled {
  background-color: rgba(255, 255, 255, 0.75) !important;
  box-shadow: inset 0 -0.15em 0 0 rgba(0, 0, 0, 0.15);
  color: #202024 !important;
  cursor: default;
  opacity: 0.25;
}

input[type="submit"].style2,
input[type="reset"].style2,
input[type="button"].style2,
button.style2,
.button.style2 {
  background-color: #7f92cf;
}

input[type="submit"].style2:hover,
input[type="reset"].style2:hover,
input[type="button"].style2:hover,
button.style2:hover,
.button.style2:hover {
  background-color: #92a2d6;
}

input[type="submit"].style2:active,
input[type="reset"].style2:active,
input[type="button"].style2:active,
button.style2:active,
.button.style2:active {
  background-color: #6c82c8;
}

input[type="submit"].style3,
input[type="reset"].style3,
input[type="button"].style3,
button.style3,
.button.style3 {
  background-color: #9d7ed0;
}

input[type="submit"].style3:hover,
input[type="reset"].style3:hover,
input[type="button"].style3:hover,
button.style3:hover,
.button.style3:hover {
  background-color: #ab91d7;
}

input[type="submit"].style3:active,
input[type="reset"].style3:active,
input[type="button"].style3:active,
button.style3:active,
.button.style3:active {
  background-color: #8f6bc9;
}

@media screen and (max-width: 480px) {
  input[type="submit"],
  input[type="reset"],
  input[type="button"],
  button,
  .button {
    padding: 0;
  }
}

/* Poptrox */

.poptrox-popup {
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  -ms-box-sizing: content-box;
  box-sizing: content-box;
  background: #000;
  box-shadow: 0 0.5em 3em 0 rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 2em;
  overflow: hidden;
}

.poptrox-popup .closer {
  -moz-transition: opacity 0.2s ease-in-out;
  -webkit-transition: opacity 0.2s ease-in-out;
  -ms-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
  text-decoration: none;
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  z-index: 11000;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  white-space: nowrap;
  text-indent: 2em;
  overflow: hidden;
  width: 2em;
  height: 2em;
  display: block;
}

.poptrox-popup .closer:before {
  content: "\f00d";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-weight: normal;
  text-transform: none !important;
  display: block;
  position: relative;
  text-indent: 0;
  border-radius: 100%;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);
  color: #ffffff !important;
  width: 2em;
  height: 2em;
  line-height: 2em;
}

.poptrox-popup:hover .closer {
  opacity: 0.5;
}

.poptrox-popup:hover .closer:hover {
  opacity: 1;
}

@media screen and (max-width: 736px) {
  .poptrox-popup {
    padding: 0;
  }

  .poptrox-popup .closer {
    display: none !important;
  }
}

.dropdown-user {
  margin-left: 20px;
}

/*#button-logout{
  background-color: #e7e7e7; color: black;
}*/
</style>
