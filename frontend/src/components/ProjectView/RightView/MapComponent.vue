<template>
  <div class="map-container">
    <canvas id="deck-canvas" ref="deck"></canvas>
    <div id="map" ref="map"></div>
  </div>
</template>
<script>
import { Deck, FlyToInterpolator } from "@deck.gl/core";
import mapboxgl from "mapbox-gl";
import { mapState } from 'vuex';

export default {
  name: "MapComponent",
  data() {
    return {
      viewState: {
        latitude: 12.976387,
        longitude: 77.571529,
        zoom: 4,
        bearing: 0,
        pitch: 0,
      },
      flyTo: new FlyToInterpolator(),
    };
  },
  created() {
  },
  methods: {},
  mounted() {
    // creating the map
    const map = new mapboxgl.Map({
      accessToken: this.accessToken,
      container: this.$refs.map,
      interactive: false,
      style: this.mapStyle,
      center: [this.viewState.longitude, this.viewState.latitude],
      zoom: this.viewState.zoom,
      pitch: this.viewState.pitch,
      bearing: this.viewState.bearing,
    });
    this.$store.commit('map/initMap', map);

    const deck = new Deck({
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
    this.$store.commit('map/initDeck', deck);
  },
  watch: {
    // viewStates() {
    //   this.deck.setProps({
    //     viewState: {
    //       ...this.viewState,
    //       transitionInterpolator: new FlyToInterpolator(),
    //       transitionDuration: 2000,
    //     }
    //   })
    // }
  },
  computed: {
    ...mapState('map',{
      accessToken: state => state.accessToken,
      mapStyle: state => state.mapStyle,

      viewStates: state => state.viewStates,
      map: state => state.map,
      deck: state => state.deck,
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