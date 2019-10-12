<template>
  <div>
    <input placeholder="email" v-model="email" />
    <input placeholder="password" v-model="password" />
    <input type="submit" @click="login" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      const { data } = await axios.post(
        "http://stringshare.test/graphql/login",
        {
          email: this.email,
          password: this.password
        }
      );
      if (data.success) {
        window.localStorage.setItem("token", data.token);
        window.location.reload();
      }
    }
  }
};
</script>

<style lang="scss">
</style>