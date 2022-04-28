<template>
  <div class="data-import">
    <div class="sub-title">
      <span>Import Data</span>
    </div>

    <div class="sub-title">
      <span>Visualization Type</span>
    </div>
    <div class="geovis-cards">
      <el-card
        class="geovis-card"
        v-for="(value, index) in GeoVisTypes"
        :key="index"
        shadow="hover"
      >
        <img :src="value.picture" class="image" />
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataImport",
  data() {
    return {
      GeoVisTypes: [
        {
          label: "Scatter Plot",
          picture: "D:/Research/FDU-VIS/Projects/GeoVideo/frontend/src/assets/scatterplot-layer.jpg",
        },
        {
          label: "Path",
          picture: "@/assets/geojson-layer-paths.jpg",
        },
        {
          label: "Heatmap",
          picture: "@/assets/heatmap-layer.jpg",
        },
        {
          label: "3D Bar Chart",
          picture: "@/assets/hexagon-layer.jpg",
        },
        {
          label: "Text",
          picture: "@/assets/text-layer.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.geovis-cards {
  display: flex;
}
.image {
  width: 100%;
  display: block;
}
.geovis-card {
  margin-right: 12px;
}
</style>
