<template>
  <div>
    New bands
    <el-card v-for="band in bands" :key="band.id">
      <div>{{ band.name }}</div>
    </el-card>
  </div>
</template>

<script>
import { bandsComputed, bandsActions } from "@/vuex/helpers";
export default {
  name: "Dashboard",
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