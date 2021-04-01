<template>
  <div class="home">
    <NavBar />
    <router-view />
    <div class="main">
      <div class="inner">
        <div class="thumbnails">
          <div class="col-md-6">
            <div class="card card-container">
              <center>
                <img
                id="profile-img"
                src="../assets/images/user_gray.png"
                class="profile-img-card"
                width="100" height="100"                
                />
              </center>
              <form name="form" @submit.prevent="handleRegister" class="bg-dark">
                <div v-if="!successful">
                  <div class="form-group">
                    <input
                      v-model="user.username"
                      v-validate="'required|min:3|max:20'"
                      type="text"
                      class="form-control"
                      name="username"
                      placeholder="Nombre de usuario"
                    />
                    <div
                      v-if="submitted && errors.has('username')"
                      class="alert-danger"
                    >
                      {{ errors.first("username") }}
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      v-model="user.email"
                      v-validate="'required|email|max:50'"
                      type="email"
                      class="form-control"
                      name="email"
                      placeholder="email"
                    />
                    <div
                      v-if="submitted && errors.has('email')"
                      class="alert-danger"
                    >
                      {{ errors.first("email") }}
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      v-model="user.password"
                      v-validate="'required|min:6|max:40'"
                      type="password"
                      class="form-control"
                      name="password"
                      placeholder="Contraseña"
                    />
                    <div
                      v-if="submitted && errors.has('password')"
                      class="alert-danger"
                    >
                      {{ errors.first("password") }}
                    </div>
                  </div>
                  
                    <div class="form-group">
                    <select name="role" id="selectRole"
                    v-model="user.role"
                    class="form-control"
                    >
                      <option value="">--Seleccionar un rol de usuario--</option>
                      <option value="admin">Administrador</option>
                      <option value="mod">Moderador</option>
                      <option value="">Usuario</option>
                    </select>
                  </div>
                  
                  
                  <div class="form-group">
                    <button class="btn btn-primary">Crear usuario</button>
                  </div>
                </div>
              </form>

              <div
                v-if="message"
                class="alert"
                :class="successful ? 'alert-success' : 'alert-danger'"
              >
                {{ message }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "../components/NavBar";
import User from "../models/user";

export default {
  name: "Register",

  components: {
    NavBar,
  },

  data() {
    return {
      user: new User("", "", ""),
      submitted: false,
      successful: false,
      message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },

    currentUser() {
      return this.$store.state.auth.user;
    },

    isAdmin() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_ADMIN");
      }
      return false;
    },
  },
  mounted() {
    if (!this.isAdmin) {
      this.$router.push('/');
    }
  },
  methods: {
    handleRegister() {
      this.message = "";
      this.submitted = true;
      this.$validator.validate().then((isValid) => {
        if (isValid) {
          this.$store.dispatch("auth/register", this.user).then(
            (data) => {
              this.message = data.message;
              this.successful = true;
              
            },
            (error) => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
        }
      });
    },
  },
};
</script>
<style scoped>
  
</style>
