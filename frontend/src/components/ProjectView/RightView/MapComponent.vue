<template>
  <div class="map-container">
    <canvas id="deck-canvas" ref="deck"></canvas>
    <div id="map" ref="map"></div>

    <div class="narration" v-if="narrationVisible">
      <span>{{ narration }}</span>
    </div>
  </div>
</template>
<script>
import { Deck, FlyToInterpolator } from "@deck.gl/core";
import mapboxgl from "mapbox-gl";
import { mapState } from "vuex";
import { ScatterplotLayer } from "@deck.gl/layers";
import { MapboxLayer } from "@deck.gl/mapbox";
import { color } from "d3-color";

export default {
  name: "MapComponent",
  data() {
    return {
      viewState: {
        latitude: 11.29607090043459,
        longitude: 5.148265647218573,
        zoom: 1,
        bearing: 0,
        pitch: 0,
      },
      flyTo: new FlyToInterpolator(),
    };
  },
  methods: {
    initBaseMap() {
      this.scatterPlotLayer = new MapboxLayer({
        id: "scatter-plot",
        type: ScatterplotLayer,
        data: [],
        radiusScale: 30,
        radiusMinPixels: 0.25,
        getPosition: (d) => [d.longitude, d.latitude, 0],
        getFillColor: [254, 60, 0],
        getRadius: 3,
      });
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
      // map.on("style.load", () => {
      //   map.addLayer(this.scatterPlotLayer);
      // });
      map.on("load", () => {
        map.addLayer(this.scatterPlotLayer);
      });
      this.$store.commit("map/initMap", map);
    },
    initDeckCanvas() {
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
          this.$store.commit("map/changeLastViewState", viewState);
        },
      });
      this.$store.commit("map/initDeck", deck);
    },
  },
  mounted() {
    this.initBaseMap();
    this.initDeckCanvas();
  },
  watch: {
    data(newv) {
      this.scatterPlotLayer.setProps({ data: newv });
    },
    radius(newv) {
      this.scatterPlotLayer.setProps({ getRadius: newv / 2 });
    },
    scale(newv) {
      this.scatterPlotLayer.setProps({ radiusScale: newv / 2 });
    },
    pixels(newv) {
      this.scatterPlotLayer.setProps({ radiusMinPixels: newv / 100 });
    },
    color(newv) {
      console.log("test", newv);
      const hexcolor = color(newv);
      this.scatterPlotLayer.setProps({
        getFillColor: [hexcolor.r, hexcolor.g, hexcolor.b],
      });
    },
  },
  computed: {
    ...mapState("map", {
      accessToken: (state) => state.accessToken,
      mapStyle: (state) => state.mapStyle,

      viewStates: (state) => state.viewStates,
      map: (state) => state.map,
      deck: (state) => state.deck,

      data: (state) => state.data,
      narrationVisible: state => state.narrationVisible,
      narration: state => state.narration,
    }),
    ...mapState("scatterplot", {
      radius: (state) => state.radius,
      scale: (state) => state.scale,
      pixels: (state) => state.pixels,
      color: (state) => state.color,
    }),

    // layers() {
    //   return [
    //     // new HeatmapLayer({
    //     //   data: this.data,
    //     //   id: 'heatmp-layer',
    //     //   pickable: false,
    //     //   getPosition: d => [d.longitude, d.latitude],
    //     //   getWeight: d => d.counts,
    //     //   radiusPixels: this.radius,
    //     //   intensity: this.intensity,
    //     //   threshold: this.threshold,
    //     // })
    //     new ScatterplotLayer({
    //       id: 'scatter-plot',
    //       data: this.data,
    //       radiusScale: 30,
    //       radiusMinPixels: 0.25,
    //       getPosition: d => [d.longitude, d.latitude, 0],
    //       getFillColor: d => [255, 255-d.counts*30, 0],
    //       getRadius: 20,
    //     })
    //   ];
    // },
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
.narration {
  font-size: 18px;
  position: absolute;
  margin-top: 46%;
  color: white;
  display: flex;
  justify-content: center;
  max-width: 80%;
  margin-left: 10%;
  text-align: center;

}
</style>