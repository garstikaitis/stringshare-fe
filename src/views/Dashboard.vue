<template>
  <div>
    <ss-navigation />
    <div>!23</div>
  </div>
</template>

<script>
import { authComputed } from "@/vuex/helpers";
export default {
  name: "Dashboard",
  computed: {
    ...authComputed
  },
  methods: {}
};
</script>