<template>
  <div class="clip-component" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <div id="clip-map" size="mini" ref="clipMap"></div>
    <el-button circle v-show="hovered" @click="deleteClip">
      <font-awesome-icon icon="fa-solid fa-xmark" />
    </el-button>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import { mapState } from "vuex";

export default {
  name: "ClipComponent",
  props: ['viewState', 'index'],
  data() {
    return {
      hovered: false,
    };
  },
  methods: {
    mouseenter() {
      this.hovered = true;
    },
    mouseleave() {
      this.hovered = false;
    },
    deleteClip() {
      this.$store.commit('map/deleteViewState', this.index);
    },
  },
  mounted() {
    // creating the map
    console.log(this.viewState);
    new mapboxgl.Map({
      accessToken: this.accessToken,
      container: this.$refs.clipMap,
      interactive: false,
      style: this.mapStyle,
      center: [this.viewState.longitude, this.viewState.latitude],
      zoom: 0.7 * this.viewState.zoom,
      pitch: this.viewState.pitch,
      bearing: this.viewState.bearing,
    });
  },
  computed: {
    ...mapState("map", {
      accessToken: (state) => state.accessToken,
      mapStyle: (state) => state.mapStyle,

      viewStates: state => state.viewStates,
    }),
  },
};
</script>

<style scoped>
.clip-component {
  min-width: 350px;
  height: 200px;
  margin-top: 5px;
  margin-bottom: 5px;
  overflow: hidden;
  background-color: #eee;
  border: 2px solid lightgray;
  position: relative;
}
.clip-component:hover {
  border-color: rgb(51, 111, 185);
}
.clip-component > * {
  float: left;
}
#clip-map {
  width: 100%;
  height: 100%;
}
button {
  position: absolute;
  right: 2px;
  top: 2px;
  width: 30px;
  height: 30px;
}
.el-button.is-circle {
  padding: 8px;
}
</style>
