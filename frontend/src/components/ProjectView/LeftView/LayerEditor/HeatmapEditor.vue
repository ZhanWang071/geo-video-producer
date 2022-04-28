<template>
  <div class="heatmap-editor">
    <div class="slider-demo-block">
      <span class="demonstration">Intensity</span>
      <el-slider
        :value="intensity * 20"
        @input="updateIntensity"
        :format-tooltip="formatIntensityTl"
        :step="2"
      />
    </div>
    <div class="slider-demo-block">
      <span class="demonstration">Radius</span>
      <el-slider
        :value="radius * 2"
        @input="updateRadius"
        :format-tooltip="formatRadiusTl"
        :step="2"
      />
    </div>
    <div class="slider-demo-block">
      <span class="demonstration">Threshold</span>
      <el-slider
        :value="threshold * 100"
        @input="updateThreshold"
        :format-tooltip="formatThresholdTl"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HeatmapEditor",
  methods: {
    formatIntensityTl(val) {
      return val / 20;
    },
    formatRadiusTl(val) {
      return val / 2;
    },
    formatThresholdTl(val) {
      return val / 100;
    },
    updateIntensity(value) {
      this.$store.commit("heatmap/changeIntensity", value / 20);
    },
    updateRadius(value) {
      this.$store.commit("heatmap/changeRadius", value / 2);
    },
    updateThreshold(value) {
      this.$store.commit("heatmap/changeThreshold", value / 100);
    },
  },
  computed: {
    ...mapState("heatmap", {
      intensity: (state) => state.intensity,
      radius: (state) => state.radius,
      threshold: (state) => state.threshold,
    }),
    // intensity: {
    //   get() {
    //     return this.$store.state.heatmap.intensity;
    //   },
    //   set(value) {
    //     this.$store.commit("heatmap/changeIntensity", value/20);
    //   },
    // },
    // radius: {
    //   get() {
    //     return this.$store.state.heatmap.radius;
    //   },
    //   set(value) {
    //     this.$store.commit("heatmap/changeRadius", value/2);
    //   },
    // },
    // threshold: {
    //   get() {
    //     return this.$store.state.heatmap.threshold;
    //   },
    //   set(value) {
    //     this.$store.commit("heatmap/changeThreshold", value/100);
    //   },
    // },
  },
};
</script>

<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
.el-slider {
  margin-right: 12px;
}
.slider-demo-block .demonstration {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  line-height: 44px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}
.slider-demo-block .demonstration + .el-slider {
  flex: 0 0 70%;
}
</style>