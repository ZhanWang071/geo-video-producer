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
// import { HeatmapLayer } from '@deck.gl/aggregation-layers';
import {ScatterplotLayer} from '@deck.gl/layers';
import json from '@/assets/global_terrorism.json'
import {MapboxLayer} from '@deck.gl/mapbox';

export default {
  name: "MapComponent",
  data() {
    return {
      data: json,
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
  methods: {
    initBaseMap() {
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
      map.on("load",()=>{
        map.addLayer(this.scatterPlotLayer);
        }
      )
      this.$store.commit('map/initMap', map);
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
          this.$store.commit('map/changeLastViewState', viewState);
        },
      });
      this.$store.commit('map/initDeck', deck);
    },
  },
  mounted() {
    this.initBaseMap();
    this.initDeckCanvas();
  },
  computed: {
    ...mapState('map',{
      accessToken: state => state.accessToken,
      mapStyle: state => state.mapStyle,

      viewStates: state => state.viewStates,
      map: state => state.map,
      deck: state => state.deck,
    }),
    ...mapState('heatmap',{
      intensity: state => state.intensity,
      radius: state => state.radius,
      threshold: state => state.threshold,
    }),
    scatterPlotLayer() {
      return new MapboxLayer({
        id: 'scatter-plot',
        type: ScatterplotLayer,
        data: this.data,
        radiusScale: 30,
        radiusMinPixels: 0.25,
        getPosition: d => [d.longitude, d.latitude, 0],
        getFillColor: d => [255, 255-d.counts*30, 0],
        getRadius: 20,
      })
    },
    layers() {
      return [
        // new HeatmapLayer({
        //   data: this.data,
        //   id: 'heatmp-layer',
        //   pickable: false,
        //   getPosition: d => [d.longitude, d.latitude],
        //   getWeight: d => d.counts,
        //   radiusPixels: this.radius,
        //   intensity: this.intensity,
        //   threshold: this.threshold,
        // })
        new ScatterplotLayer({
          id: 'scatter-plot',
          data: this.data,
          radiusScale: 30,
          radiusMinPixels: 0.25,
          getPosition: d => [d.longitude, d.latitude, 0],
          getFillColor: d => [255, 255-d.counts*30, 0],
          getRadius: 20,
        })
      ];
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