<template>
  <div class="map-editor">
    <div class="sub-title">Global Map</div>
    <div class="style-wrapper">
      <span style="font-size:14px">Style&nbsp;&nbsp;</span>
      <el-select
        v-model="value"
        class="map-style-selector"
        placeholder="Select"
        size="small"
        style="margin-left: 55px; margin-right: 70px"
      >
        <el-option
          v-for="item in styles"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <div class="sub-title">Scatter Plot Layer</div>
    <scatter-plot-editor />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ScatterPlotEditor from "./LayerEditor/ScatterPlotEditor.vue";

export default {
  components: { ScatterPlotEditor },
  name: "MapEditor",
  data() {
    return {
      value: "mapbox://styles/mapbox/dark-v10",
      styles: [
        {
          label: "Dark",
          value: "mapbox://styles/mapbox/dark-v10",
        },
        {
          label: "Light",
          value: "mapbox://styles/mapbox/light-v10",
        },
        {
          label: "Streets",
          value: "mapbox://styles/mapbox/streets-v11",
        },
        {
          label: "Outdoors",
          value: "mapbox://styles/mapbox/outdoors-v11",
        },
        {
          label: "Satellite",
          value: "mapbox://styles/mapbox/satellite-v9",
        },
      ],
    };
  },
  watch: {
    value(newv) {
      this.$store.commit("map/updateMapStyle", newv);
    },
  },
  computed: {
    ...mapState("map", {
      mapStyle: (state) => state.mapStyle,
    }),
  },
};
</script>

<style scoped>
.sub-title {
  margin-bottom: 10px;
  margin-left: 5px;
  font-weight: bold;
  font-size: larger;
}
.style-wrapper {
  display: flex;
  justify-content: space-around;
  padding-left: 5px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 14px;
}
</style>
