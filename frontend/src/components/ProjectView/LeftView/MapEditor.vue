<template>
  <div class="map-editor">
    <h3>Global Map</h3>
    <span>Style&nbsp;&nbsp;</span>
    <el-select v-model="value" class="map-style-selector" placeholder="Select" size="large">
    <el-option
      v-for="item in styles"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
    </el-select>
    <!-- <h3>Layers</h3>
    <heatmap-editor /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
// import HeatmapEditor from './LayerEditor/HeatmapEditor.vue';

export default {
  // components: { HeatmapEditor },
  name: "MapEditor",
  data(){
    return {
      value: "mapbox://styles/mapbox/light-v10",
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
        }
      ],
    }
  },
  watch: {
    value(newv){
      
      this.$store.commit('map/updateMapStyle', newv);
    }
  },
  computed: {
    ...mapState('map',{
      mapStyle: state => state.mapStyle,
    }),
  }
};
</script>

<style scoped>
</style>
