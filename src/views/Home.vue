<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-for="user in users" :key="user.id">{{ user.email }}</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import gql from "graphql-tag";
export default {
  apollo: {
    // Simple query that will update the 'hello' vue property
    users: gql`
      query {
        users {
          id
          email
        }
      }
    `
  },
  data() {
    return {
      users: null
    };
  },
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
