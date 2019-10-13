<template>
  <div>
    <ss-navigation />
    <h1 class="text-xl text-gray-700 my-5">Bands</h1>
    <div class="flex flex-wrap -mx-2">
      <div v-for="band in bands" :key="band.id" class="w-1/3 px-2">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://www.watchmojo.com/uploads/thumbs720/M-RR-ACDC-480i60.jpg" />
          <div class="text-lg my-4 ml-4">{{ band.name }}</div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { bandsComputed, bandsActions } from "@/vuex/helpers";
export default {
  name: "Bands",
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