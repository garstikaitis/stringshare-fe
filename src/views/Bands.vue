<template>
  <div>
    <ss-navigation />
    <div class="flex items-center justify-between">
      <h1 class="text-xl text-gray-700">Bands</h1>
      <el-select multiple collapse-tags v-model="selectedGenre" placeholder="Select">
        <el-option
          v-for="(genre, index) in ['All', ...genres]"
          :key="index"
          :label="genre"
          :value="genre"
        ></el-option>
      </el-select>
    </div>
    <div class="flex flex-wrap -mx-2">
      <div v-for="band in bands" :key="band.id" class="w-1/3 px-2">
        <router-link :to="{name: 'band', params: { id: band.id, band }}">
          <el-card class="cursor-pointer" :body-style="{ padding: '0px' }">
            <img :src="band.logo" />
            <div class="m-4 flex items-center width-100 justify-between">
              <div class="text-lg">{{ band.name }}</div>
              <div>
                <el-tag
                  type="info"
                  class="mr-2"
                  v-for="(genre, index) in band.genres"
                  :key="index"
                >{{ genre }}</el-tag>
              </div>
            </div>
          </el-card>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {
  bandsComputed,
  bandsActions,
  enumsActions,
  enumsComputed
} from "@/vuex/helpers";
export default {
  name: "Bands",
  data() {
    return {
      selectedGenre: "All"
    };
  },
  computed: {
    ...bandsComputed,
    ...enumsComputed
  },
  methods: {
    ...bandsActions,
    ...enumsActions
  },
  mounted() {
    this.fetchBands();
    this.fetchGenres();
  }
};
</script>