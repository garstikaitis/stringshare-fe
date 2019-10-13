<template>
  <div class="h-screen items-center flex my-10">
    <div class="flex mb-4">
      <div class="w-1/2">
        <img src="@/assets/illustrations/auth.svg" />
      </div>
      <div class="w-1/2 flex flex-col mx-12 justify-center">
        <div class="text-xl font-medium text-left">Sign in</div>
        <div class="text-sm text-left mb-4">Explore venues & artists</div>
        <el-card shadow="always">
          <label class="flex">Email</label>
          <el-input class="my-2" v-model="email" placeholder="E.g ac@dc.com" />
          <label class="flex">Password</label>
          <el-input class="my-2" v-model="password" type="password" show-password />
          <el-divider />
          <el-button v-if="isLoading" type="primary" class="w-full">
            <el-spinner :radius="30" />
          </el-button>
          <el-button @click="login" v-else type="primary" class="w-full">Sign in</el-button>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { authActions } from "@/vuex/helpers";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      isLoading: false
    };
  },
  methods: {
    ...authActions,
    async login() {
      this.isLoading = true;
      const { success } = await this.logInUser({
        email: this.email,
        password: this.password
      });
      if (success) {
        this.$router.push({ name: "dashboard" });
      }
      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss">
</style>