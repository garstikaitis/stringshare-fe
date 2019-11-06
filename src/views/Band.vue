<template>
  <div>
    <ss-navigation />
    <div class="relative">
      <img class="h-64 w-full object-cover" :src="band.logo" />
      <div class="flex justify-between">
        <h1 class="text-xl text-gray-700">{{ band.name }}</h1>
      </div>
      <ss-floater />
      <el-button @click="playSong">play</el-button>
    </div>
  </div>
</template>

<script>
import {
  authComputed,
  bandsComputed,
  proposalsActions,
  streamingActions,
  streamingComputed
} from "@/vuex/helpers";

export default {
  name: "Band",
  computed: {
    ...authComputed,
    ...bandsComputed,
    ...streamingComputed,
    band() {
      return this.bands.find(band => band.slug === this.$route.params.slug);
    }
  },
  data() {
    return {
      audio: null
    };
  },
  mounted() {
    this.fetchSong();
  },
  methods: {
    ...streamingActions,
    playSong() {
      if (!this.audio) this.audio = new Audio();
      this.audio.src = this.streaming.song;
      this.audio.play();
    }
  }
};
</script>