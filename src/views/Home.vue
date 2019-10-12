<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { bandsActions, bandsComputed } from "@/vuex/helpers";
export default {
  data() {
    return {
      user: null
    };
  },
  name: "home",
  computed: {
    ...bandsComputed
  },
  methods: {
    ...bandsActions
  },
  mounted() {
    this.fetchBands();
  }
};
</script>
