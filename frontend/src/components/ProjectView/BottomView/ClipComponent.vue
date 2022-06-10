<template>
  <div class="clip-component" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <div id="clip-map" size="mini" ref="clipMap"></div>
    <div class="buttons">
      <el-popover
        v-model=visible
        placement="top"
        title="Narration"
        :width="300"
        trigger="click"
      >
        <el-input
          v-model="textarea"
          autosize
          type="textarea"
          placeholder="Please input"
          style="margin-bottom:5px"
        />
        <div style="text-align: right; margin: 0">
          <el-button size="small" text @click="visible = false"
            >cancel</el-button
          >
          <el-button size="small" type="primary" @click="confirmText"
            >confirm</el-button
          >
        </div>
        <template #reference>
          <el-button
            class="text-button"
            circle
            v-show="hovered"
            @click="addText"
          >
            <font-awesome-icon icon="fa-solid fa-file-text" />
          </el-button>
        </template>
      </el-popover>

      <el-button
        class="delete-button"
        style="margin-left: 8px"
        circle
        v-show="hovered"
        @click="deleteClip"
      >
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </el-button>
    </div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import { mapState } from "vuex";

export default {
  name: "ClipComponent",
  props: ["viewState", "index"],
  data() {
    return {
      textarea:"",
      hovered: false,
      visible: false,
    };
  },
  methods: {
    confirmText() {
      this.visible = false;
      this.$store.commit('map/updateText', {index:this.index,textarea:this.textarea});
    },
    mouseenter() {
      this.hovered = true;
    },
    mouseleave() {
      this.hovered = false;
    },
    deleteClip() {
      this.$store.commit("map/deleteViewState", this.index);
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

      viewStates: (state) => state.viewStates,
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
.buttons {
  position: absolute;
  right: 2px;
  top: 2px;
  width: 80px;
  height: 25px;
}
.text-button,
.delete-button {
  width: 32px;
  height: 32px;
}
.el-button.is-circle {
  padding: 8px;
}
</style>
