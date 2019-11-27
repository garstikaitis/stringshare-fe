<template>
  <div>
    <ss-navigation />
    <div v-loading.fullscreen.lock="band.isLoading" class="relative">
      <img class="h-64 w-full object-cover" :src="band.band.data.stringshare_meta.logo" />
      <div class="flex items-center">
        <h1 class="mt-4 text-xl text-gray-700">{{ band.band.data.stringshare_meta.name }}</h1>
        <el-tag
          class="mx-2 mt-4"
          v-for="(genre, index) in band.band.data.spotify_meta.genres"
          :key="index"
        >{{ genre }}</el-tag>
      </div>
      <div class="flex mt-2">
        <p class="text-sm">{{ band.band.data.spotify_meta.followers.total }} followers</p>
      </div>
      <el-divider />
      <div class="flex flex-col">
        <h1 class="mt-4 text-xl text-gray-700">Albums</h1>
        <div class="flex flex-row flex-wrap">
          <el-card
            v-for="(album, index) in band.band.data.spotify_albums"
            :key="index"
            class="w-64 m-4"
          >
            <img class="h-64 w-full object-cover" :src="album.images[album.images.length - 2].url" />
            <div class="m-4 flex flex-col width-100 justify-between">
              <div class="text-lg">{{ album.name }}</div>
              <p class="text-sm">{{ album.release_date }}</p>
            </div>
          </el-card>
        </div>
      </div>
      <ss-floater />
    </div>
  </div>
</template>

<script>
import { authComputed, bandsComputed, bandsActions } from "@/vuex/helpers";

export default {
  name: "Band",
  computed: {
    ...authComputed,
    ...bandsComputed
  },
  methods: {
    ...bandsActions
  },
  mounted() {
    this.fetchBand({ slug: this.$route.params.slug });
  }
};
</script>