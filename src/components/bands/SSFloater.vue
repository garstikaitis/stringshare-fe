<template>
  <el-card class="floater absolute">
    <h1 class="mb-2 text-l">Make a proposal</h1>
    <el-form>
      <el-form-item label="Select date">
        <el-date-picker class="w-full" v-model="date" />
      </el-form-item>
      <el-form-item label="Select venue">
        <el-select class="w-full" v-model="selectedVenue">
          <el-option v-for="venue in venues" :key="venue.id" :label="venue.name" :value="venue.id"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-divider />
    <el-button
      class="w-full"
      type="primary"
      @click="addProposal({ band: band.id, venue: 1 })"
    >Proceed to booking</el-button>
  </el-card>
</template>

<script>
import {
  proposalsActions,
  venuesComputed,
  venuesActions
} from "@/vuex/helpers";
export default {
  name: "SSFloater",
  data() {
    return {
      date: new Date(),
      selectedVenue: null
    };
  },
  computed: {
    ...venuesComputed
  },
  methods: {
    ...proposalsActions,
    ...venuesActions
  },
  mounted() {
    this.fetchVenues();
  }
};
</script>

<style lang="scss" scoped>
.floater {
  width: 30%;
  right: 20px;
  top: 14rem;
}
</style>