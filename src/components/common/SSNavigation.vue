<template>
  <div class="flex py-4 items-center w-100 justify-between">
    <div>
      <img class="h-10" src="@/assets/logo_symbol.png" />
    </div>
    <div class="flex">
      <router-link
        :to="{name: 'dashboard'}"
        class="mr-6 text-gray-600"
        :class="{
            'text-purple-300': isHovered === 'dashboard',
        }"
        @mouseenter.native="isHovered = 'dashboard'"
        @mouseleave.native="isHovered = ''"
      >Dashboard</router-link>
      <router-link
        :to="{name: 'bands'}"
        class="mr-6 text-gray-600"
        :class="{
            'text-purple-300': isHovered === 'bands',
        }"
        @mouseenter.native="isHovered = 'bands'"
        @mouseleave.native="isHovered = ''"
      >Browse bands</router-link>
      <router-link
        class="text-gray-600"
        :to="{name: 'venues'}"
        :class="{
            'text-purple-300': isHovered === 'venues',
        }"
        @mouseenter.native="isHovered = 'venues'"
        @mouseleave.native="isHovered = ''"
      >Browse venues</router-link>
    </div>
    <div class="cursor-pointer flex items-center">
      <router-link
        :to="{name: 'proposals'}"
        class="mr-4 text-gray-600"
        @mouseenter.native="isHovered = 'proposals'"
        @mouseleave.native="isHovered = ''"
        :class="{
            'text-purple-300': isHovered === 'proposals',
        }"
      >Proposals</router-link>
      <el-avatar
        size="small"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></el-avatar>
      <i class="el-icon-caret-bottom ml-2"></i>
    </div>
  </div>
</template>

<script>
import { authComputed } from "@/vuex/helpers";
export default {
  name: "SSNavigation",
  data() {
    return {
      isHovered: ""
    };
  },
  computed: {
    ...authComputed
  }
};
</script>