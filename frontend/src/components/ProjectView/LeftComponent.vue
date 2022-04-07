<template>
  <div class="left-component">
    <header-component title="Configuration" />
    <el-tabs
    v-model="activeName"
    class="demo-tabs"
  >
    <el-tab-pane name="first">
      <template #label>
        <span class="custom-tabs-label">
          <font-awesome-icon icon="fa-solid fa-upload" />
          <span> Data </span>
        </span>
      </template>
      <data-import />
    </el-tab-pane>
    <el-tab-pane name="second">
      <template #label>
        <span class="custom-tabs-label">
          <font-awesome-icon icon="fa-solid fa-map-location-dot" />
          <span> Map </span>
        </span>
      </template>
      <map-editor />
    </el-tab-pane>
    <el-tab-pane name="third">
      <template #label>
        <span class="custom-tabs-label">
          <font-awesome-icon icon="fa-solid fa-camera" />
          <span> Camera </span>
        </span>
      </template>
      <camera-library />
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import HeaderComponent from "../HeaderComponent.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import DataImport from './LeftView/DataImport.vue';
import MapEditor from './LeftView/MapEditor.vue';
import CameraLibrary from './LeftView/CameraLibrary.vue';

export default {
  components: { HeaderComponent, FontAwesomeIcon, DataImport, MapEditor, CameraLibrary },
  name: "LeftComponent",
  methods: {},
  computed: {},
};
</script>

<style scoped>
.left-component {
  background: #fff;
  border: 1px solid #fff;
  margin: 5px;
  border-radius: 5px;
  height: calc(100% - 10px);
}
.demo-tabs {
  margin: 5px 10px;
}
</style>