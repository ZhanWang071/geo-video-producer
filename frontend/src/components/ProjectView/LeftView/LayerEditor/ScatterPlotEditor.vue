<template>
  <div class="scatter-plot-editor">
    <div class="slider-demo-block">
      <span class="demonstration">Color</span>
      <el-input class="color-input" v-model="color" size="small"/>
      <el-color-picker v-model="color" style="margin-right: 15px"/>
    </div>
    <div class="slider-demo-block">
      <span class="demonstration">Radius</span>
      <el-slider
        v-model="radius"
        :format-tooltip="formatRadiusTl"
        :step="2"
      />
    </div>
    <div class="slider-demo-block">
      <span class="demonstration">Radius Scale</span>
      <el-slider
        v-model="scale"
        :format-tooltip="formatScaleTl"
        :step="2"
      />
    </div>
    <div class="slider-demo-block">
      <span class="demonstration">Radius Pixels</span>
      <el-slider
        v-model="pixels"
        :format-tooltip="formatPixelsTl"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: "ScatterPlotEditor",
  methods: {
    formatRadiusTl(val) {
      return val / 2;
    },
    formatScaleTl(val) {
      return val / 2;
    },
    formatPixelsTl(val) {
      return val / 100;
    },
  },
  computed: {
    radius: {
      get() {
        return this.$store.state.scatterplot.radius;
      },
      set(value) {
        this.$store.commit("scatterplot/changeRadius", value);
      }
    },
    scale: {
      get() {
        return this.$store.state.scatterplot.scale;
      },
      set(value) {
        this.$store.commit("scatterplot/changeScale", value);
      }
    },
    pixels: {
      get() {
        return this.$store.state.scatterplot.pixels;
      },
      set(value) {
        this.$store.commit("scatterplot/changePixels", value);
      }
    },
    color: {
      get() {
        return this.$store.state.scatterplot.color;
      },
      set(value) {
        this.$store.commit("scatterplot/changeColor", value)
      }
    }
  },
};
</script>

<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
  padding-left: 5px;
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
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}
.slider-demo-block .demonstration + .el-slider {
  flex: 0 0 70%;
}
.color-input {
  padding-left: 12px;
  margin-left: 50px;
  margin-right: 15px;
}
</style>