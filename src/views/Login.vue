<template>
  <div class="login"> 

        <div class="page-wrapper bg-secondary p-t-180 p-b-100 font-poppins">
            <div class="wrapper wrapper--w780">
                <div class="card card-3">
                    <div class="card-heading bg-ligth"></div>
                    <div class="card-body">
                        <h2 class="title">Iniciar sesión</h2>
                        <form name="form" @submit.prevent="handleLogin">
                            <div class="input-group">
                                
                                <input class="input--style-3" type="text" name="username" v-model="user.username" v-validate="'required'" placeholder="Nombre de usuario" />
                                <div v-if="errors.has('username')" class="alert alert-danger" role="alert">El nombre de usuario es requerido</div>

                            </div>

                            <div class="input-group">

                                <input class="input--style-3" type="password" placeholder="Contraseña" v-model="user.password" v-validate="'required'" name="password">
                                <div v-if="errors.has('password')" class="alert alert-danger" role="alert">La contraseña es requerida</div>

                            </div>
                            <div class="p-t-10">
                                <button class="btn btn--pill btn--green">
                                  <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                                  <span>Entrar</span>
                                </button>
                            </div>
                            <div class="form-group">
                              <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
                            </div>
                        </form>
                        <!-- <p v-if="showError" id="error">Nombre de usuario o contraseña incorrectos</p> -->
                    </div>
                </div>
            </div>
        </div>

  </div>
</template>

<script>
    import User from '../models/user';

    export default {
      name: 'Login',
      components: {},
      data() {
        return {
          user: new User('',''),
          loading: false,
          message: ''
        };
      },

    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
    },
    created() {
      if (this.loggedIn) {
        this.$router.push('/about');
      }
    },
    methods: {
       handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/');
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    }
  }  
};    
</script>

<style scoped>
    
/* ==========================================================================
   #FONT
   ========================================================================== */

.font-robo {
  font-family: "Roboto", "Arial", "Helvetica Neue", sans-serif;
}

.font-poppins {
  font-family: "Poppins", "Arial", "Helvetica Neue", sans-serif;
}

@media (max-width: 767px) {
  .col-2 {
    width: 100%;
  }
}

/* ==========================================================================
   #BOX-SIZING
   ========================================================================== */
/*
 * More sensible default box-sizing:
 * css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice
 */

html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

* {
  padding: 0;
  margin: 0;
}

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

/* ==========================================================================
   #RESET
   ========================================================================== */
/**
 * A very simple reset that sits on top of Normalize.css.
 */
 
body,
h1, h2, h3, h4, h5, h6,
blockquote, p, pre,
dl, dd, ol, ul,
figure,
hr,
fieldset, legend {
  margin: 0;
  padding: 0;
}

/**
 * Remove trailing margins from nested lists.
 */
 
li > ol,
li > ul {
  margin-bottom: 0;
}


/**
 * 1. Reset Chrome and Firefox behaviour which sets a `min-width: min-content;`
 *    on fieldsets.
 */
 
fieldset {
  min-width: 0;
  /* [1] */
  border: 0;
}

button {
  outline: none;
  background: none;
  border: none;
}

/* ==========================================================================
   #PAGE WRAPPER
   ========================================================================== */

.page-wrapper {
  min-height: 100vh;
}

body {
  font-family: "Poppins", "Arial", "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 14px;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
}

h1 {
  font-size: 36px;
}

h2 {
  font-size: 30px;
}

h3 {
  font-size: 24px;
}

h4 {
  font-size: 18px;
}

h5 {
  font-size: 15px;
}

h6 {
  font-size: 13px;
}

/* ==========================================================================
   #BACKGROUND
   ========================================================================== */

.bg-secondary {
    background-color:#6c757d!important
}
a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover {
    background-color:#545b62!important
}

/* ==========================================================================
   #SPACING
   ========================================================================== */

.p-t-180 {
  padding-top: 180px;
}



.p-t-10 {
  padding-top: 10px;
}



.p-b-100 {
  padding-bottom: 100px;
}

/* ==========================================================================
   #WRAPPER
   ========================================================================== */

.wrapper {
  margin: 0 auto;
}

.wrapper--w960 {
  max-width: 960px;
}

.wrapper--w780 {
  max-width: 780px;
}

.wrapper--w680 {
  max-width: 680px;
}

/* ==========================================================================
   #BUTTON
   ========================================================================== */

.btn {
  display: inline-block;
  line-height: 40px;
  padding: 0 33px;
  font-family: Poppins, Arial, "Helvetica Neue", sans-serif;
  cursor: pointer;
  color: #fff;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
  font-size: 18px;
}


.btn--pill {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
}

.btn--green {
  background: #57b846;
}

.btn--green:hover {
  background: #4dae3c;
}

/* ==========================================================================
   #DATE PICKER
   ========================================================================== */

input[type="date" i] {
  padding: 14px;
}


/* ==========================================================================
   #FORM
   ========================================================================== */

input {
  outline: none;
  margin: 0;
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  width: 100%;
  font-size: 14px;
  font-family: inherit;
}


.input--style-3 {
  padding: 5px 0;
  font-size: 16px;
  color: #ccc;
  background: transparent;
}

.input--style-3::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #ccc;
}

.input--style-3:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #ccc;
  opacity: 1;
}

.input--style-3::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #ccc;
  opacity: 1;
}

.input--style-3:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #ccc;
}

.input--style-3:-ms-input-placeholder {
  /* Microsoft Edge */
  color: #ccc;
}



/* ==========================================================================
   #TITLE
   ========================================================================== */

.title {
  font-size: 24px;
  color: #fff;
  font-weight: 400;
  margin-bottom: 36px;
}

/* ==========================================================================
   #CARD
   ========================================================================== */

.card {
  overflow: hidden;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background: #fff;
}

.card-3 {
  background: #000;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  width: 100%;
  display: table;
}

.card-3 .card-heading {
  background: url("../assets/images/user_gray.png") top left/cover no-repeat;
  display: table-cell;
  width: 50%;
}

.card-3 .card-body {
  padding: 57px 65px;
  padding-bottom: 65px;
  display: table-cell;
}

@media (max-width: 767px) {
  .card-3 {
    display: block;
  }
  .card-3 .card-heading {
    display: block;
    width: 100%;
    padding-top: 250px;
    background-position:center top;
  }
  .card-3 .card-body {
    display: block;
    width: 100%;
    padding: 37px 30px;
    padding-bottom: 45px;
  }
    
    .bg-light {
        background-color:#f8f9fa!important
    }
    a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{
        background-color:#dae0e5!important
    }
}

</style>