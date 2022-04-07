<template>
  <div class="button-component">
    <el-button circle size="small" @click="save">
      <font-awesome-icon icon="fa-solid fa-folder-plus" fixed-width />
    </el-button>
    <el-button circle size="small" @click="recover">
      <font-awesome-icon icon="fa-solid fa-arrow-rotate-left" fixed-width />
    </el-button>
    <el-button circle size="small" @click="play">
      <font-awesome-icon icon="fa-solid fa-play" fixed-width />
    </el-button>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "ButtonComponent",
  component: { FontAwesomeIcon },
  methods: {
    save() {
      console.log("Save a clip");
    },
    recover() {
      console.log("Recover the map");
    },
    play() {
      console.log("Play the video");
    },
  },
};
</script>

<style scoped>
.button-component {
  margin-top: 5px;
  width: 30px;
}
.el-button {
  margin-bottom: 5px;
}
.el-button + .el-button {
  margin-left: 0px;
}
</style>
