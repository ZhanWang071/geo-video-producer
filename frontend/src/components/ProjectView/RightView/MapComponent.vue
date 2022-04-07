<template>
  <div class="map-container">
    <canvas id="deck-canvas" ref="deck"></canvas>
    <div id="map" ref="map"></div>
    
  </div>
</template>
<script>
import { Deck } from "@deck.gl/core";
import mapboxgl from "mapbox-gl";
import { mapState } from 'vuex';

export default {
  name: "MapComponent",
  data() {
    return {
      accessToken:
        "pk.eyJ1Ijoid3o5ODY5NzA0MDYiLCJhIjoiY2wxbnN5cnc0MDB0ajNjcDkxYmdubGRvZiJ9.EpGZDuJfhf-knwGjkOzV1Q",
      mapStyle: 'mapbox://styles/mapbox/light-v9',
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
    this.map = null;
    this.deck = null;
  },
  methods: {},
  mounted() {
    // creating the map
    this.map = new mapboxgl.Map({
      accessToken: this.accessToken,
      container: this.$refs.map,
      interactive: false,
      style:
        this.mapStyle || "mapbox://styles/haxzie/ck7h838qb0bik1iofe0k2i3f2",
      center: [this.viewState.longitude, this.viewState.latitude],
      zoom: this.viewState.zoom,
      pitch: this.viewState.pitch,
      bearing: this.viewState.bearing,
    });

    this.deck = new Deck({
      canvas: this.$refs.deck,
      width: "100%",
      height: "100%",
      initialViewState: this.viewState,
      controller: true,
      onViewStateChange: ({ viewState }) => {
        this.map.jumpTo({
          center: [viewState.longitude, viewState.latitude],
          zoom: viewState.zoom,
          bearing: viewState.bearing,
          pitch: viewState.pitch,
        });
        this.$store.commit('map/changeLastViewState', viewState);
      },
    });
  },
  computed: {
    ...mapState('map',{
      viewStates: state => state.viewStates,
    }),
    layers() {
      return [ ];
    },
  },
};
</script>

<style scoped>
.map-container {
  width: calc(100% - 50px);
  height: calc(100% - 5px);
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  position: relative;
}
.map-container > * {
  width: 100%;
  height: 100%;
  float: left;
}
</style>