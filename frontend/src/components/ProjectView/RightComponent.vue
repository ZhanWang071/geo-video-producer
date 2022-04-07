<template>
  <div class="right-component">
    <header-component title="Map" />
    <div class="map-content">
      <map-component />
      <button-component />
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../HeaderComponent.vue';
import ButtonComponent from './RightView/ButtonComponent.vue';
import MapComponent from "./RightView/MapComponent.vue";

export default {
  name: "RightComponent",
  components: { MapComponent, HeaderComponent, ButtonComponent },
};
</script>

<style scoped>
.right-component {
  background: #fff;
  border: 1px solid #fff;
  margin: 5px;
  border-radius: 5px;
  height: calc(100% - 10px);
}
.map-content {
  height: calc(100% - 50px);
  width: 100%;
  display: flex;
  overflow: hidden;
}
</style>