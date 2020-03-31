<template>
  <div class="md-layout text-center">
    <div
      class="md-layout-item md-size-33 md-medium-size-50 md-small-size-70 md-xsmall-size-100"
    >
      <login-card header-color="green">
        <h4 slot="title" class="title">Log in</h4>
        <md-button
          slot="buttons"
          href="#facebook"
          class="md-just-icon md-simple md-white"
        >
          <i class="fab fa-facebook-square"></i>
        </md-button>
        <md-button
          slot="buttons"
          href="#twitter"
          class="md-just-icon md-simple md-white"
        >
          <i class="fab fa-twitter"></i>
        </md-button>
        <md-button
          slot="buttons"
          href="#google"
          class="md-just-icon md-simple md-white"
        >
          <i class="fab fa-google-plus-g"></i>
        </md-button>
        <p slot="description" class="description">Or Be Classical</p>
        <!-- <md-field class="md-form-group" slot="inputs">
          <md-icon>face</md-icon>
          <label>First Name...</label>
          <md-input v-model="firstname"></md-input>
        </md-field> -->
        <md-field class="md-form-group" slot="inputs">
          <md-icon>email</md-icon>
          <label>Email...</label>
          <md-input v-model="email" type="email"></md-input>
        </md-field>
        <md-field class="md-form-group" slot="inputs">
          <md-icon>lock_outline</md-icon>
          <label>Password...</label>
          <md-input v-model="password" type="password"></md-input>
        </md-field>
        <md-button
          @click="doLogin()"
          slot="footer"
          class="md-simple md-success md-lg"
        >
          Lets Go
        </md-button>
      </login-card>
    </div>
  </div>
</template>
<script>
import { LoginCard } from "@/components";
import Auth from "@/api/Auth";
export default {
  components: {
    LoginCard
  },
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    doLogin() {
      Auth.login({ email: this.email, password: this.password })
        .then(response => {
          localStorage.setItem("token", response.data.access_token); // set token
          this.$store.dispatch("auth_vuex/set_auth", true);
          this.$store.dispatch("auth_vuex/set_user", response.data.user); // set user
          this.$router.push("/"); // redirect user
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
