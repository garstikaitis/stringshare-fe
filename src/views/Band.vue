<template>
  <div>
    <ss-navigation />
    <div class="relative">
      <img class="h-64 w-full object-cover" :src="band.logo" />
      <div class="flex justify-between">
        <h1 class="text-xl text-gray-700">{{ band.name }}</h1>
      </div>
      <ss-floater />
    </div>
  </div>
</template>

<script>
import { authComputed, bandsComputed, proposalsActions } from "@/vuex/helpers";
export default {
  name: "Band",
  computed: {
    ...authComputed,
    ...bandsComputed,
    band() {
      // double == because $route.params.id returns string
      return this.bands.find(band => band.id == this.$route.params.id);
    }
  }
};
</script>