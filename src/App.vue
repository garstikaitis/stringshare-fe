<template>
  <div id="app">
    <ss-container>
      <router-view />
    </ss-container>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
body {
  font-family: "Noto Sans", sans-serif;
}
.router-link-exact-active {
  color: theme("colors.purple.700") !important;
}
</style>
