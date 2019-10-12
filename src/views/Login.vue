<template>
  <div>
    <input placeholder="email" v-model="email" />
    <input placeholder="password" v-model="password" />
    <input type="submit" @click="login" />
  </div>
</template>

<script>
import axios from "axios";
import { authActions } from "@/vuex/helpers";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...authActions,
    async login() {
      const { success } = await this.logInUser({
        email: this.email,
        password: this.password
      });
      if (success) {
        window.location.reload();
      }
    }
  }
};
</script>

<style lang="scss">
</style>