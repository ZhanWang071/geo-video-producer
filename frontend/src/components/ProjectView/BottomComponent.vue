<template>
  <div class="bottom-component">
    <header-component title="Story Clips" />
    
    <div class="clip-sequence">
      <clip-component />
      <camera-component />
      <clip-component />
      <camera-component />
      <clip-component />
      <camera-component />
      <clip-component />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../HeaderComponent.vue";
import CameraComponent from './BottomView/CameraComponent.vue';
import ClipComponent from './BottomView/ClipComponent.vue';

export default {
  components: { HeaderComponent, ClipComponent, CameraComponent },
  name: "BottomComponent",
};
</script>

<style scoped>
.bottom-component {
  background: #fff;
  border: 1px solid #fff;
  margin: 5px;
  border-radius: 5px;
  height: calc(100% - 10px);
}
.clip-sequence {
  margin: 5px;
  display: flex;
  overflow: auto;
  align-items: center;
}
</style>