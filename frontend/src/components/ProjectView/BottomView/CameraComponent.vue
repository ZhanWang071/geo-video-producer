<template>
  <div class="camera-component">
      <el-button size="small" @click="camera">
      <font-awesome-icon icon="fa-solid fa-camera" />
    </el-button>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "CameraComponent",
  component: { FontAwesomeIcon },
  method: {
    camera() {
      console.log("Change camera animation")
    },
  }
};
</script>

<style scoped>
.camera-component {
  min-width: 50px;
  height: 200px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
