<template>
  <VueDeckgl
    :layers="layers"
    :viewState="viewState"
    @click="handleClick"
    @view-state-change="handleViewStateChange"
  >
    <div id="map" ref="map"></div>
  </VueDeckgl>
</template>
<script>
import VueDeckgl from "vue-deck.gl";
import mapboxgl from "mapbox-gl";

export default {
  name: "MapComponent",
  components: {
    VueDeckgl,
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1Ijoid3o5ODY5NzA0MDYiLCJhIjoiY2wxbnN5cnc0MDB0ajNjcDkxYmdubGRvZiJ9.EpGZDuJfhf-knwGjkOzV1Q",
      mapStyle: "mapbox://styles/haxzie/ck0aryyna2lwq1crp7fwpm5vz",
      viewState: {
                latitude: 12.976387,
                longitude: 77.571529,
                zoom: 4,
                bearing: 0,
                pitch: 0,
            },
    };
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.map = null;
  },
  methods: {
    updateViewState(viewState) {
      console.log("updating view state...");
      this.viewState = {
        ...viewState
      }
      this.map.jumpTo({
        center: [viewState.longitude, viewState.latitude],
        zoom: viewState.zoom,
        bearing: viewState.bearing,
        pitch: viewState.pitch,
      });
    },
    hnadleClick({ event, info }) {
      console.log(event,info)
    }
  },
  mounted() {
    // creating the map
    this.map = new mapboxgl.Map({
      accessToken: this.accessToken,
      container: this.$refs.map,
      interactive: true,
      style:
        this.mapStyle || "mapbox://styles/haxzie/ck7h838qb0bik1iofe0k2i3f2",
      center: [this.viewState.longitude, this.viewState.latitude],
      zoom: this.viewState.zoom,
      pitch: this.viewState.pitch,
      bearing: this.viewState.bearing,
    });

    setTimeout(() => {
      const { latitude, longitude, pitch, bearing, zoom } = this.viewState;
      this.viewState = {
        latitude,
        longitude,
        pitch,
        bearing,
        zoom: 12,
        transitionDuration: 3000,
      };
      console.log(zoom);
    }, 5000);
  },
  computed: {
    layers() {
      return []
    },
  },
};
</script>

<style scoped>
.deckgl-container {
  margin: 5px;
  width: calc(100% - 50px);
  height: 100%;
}
#map {
  margin: 5px;
  width: calc(100% - 50px);
  height: 100%;
  background: #e5e9ec;
  overflow: hidden;
}
canvas {
  width: 100%;
  height: 100%;
}
</style>