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
    <el-button circle size="small" @click="restart">
      <font-awesome-icon icon="fa-solid fa-trash" fixed-width />
    </el-button>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { mapState } from 'vuex';
import { FlyToInterpolator } from "@deck.gl/core";

export default {
  name: "ButtonComponent",
  component: { FontAwesomeIcon },
  methods: {
    save() {
      console.log("Save a clip");
      this.$store.commit("map/addViewState", this.lastViewState)
    },
    recover() {
      console.log("Recover the map");
    },
    play() {
      console.log("Play the video");
      if (!this.viewStates) return;
      for (let i in this.viewStates) {
        setTimeout(() => {
          console.log(i);
          this.deck.setProps({
            initialViewState: {
              ...this.viewStates[i],
              transitionInterpolator: new FlyToInterpolator(),
              transitionDuration: 2000,
            }
          })
        }, 2000)
      }
    },
    restart() {
      console.log("Restart")
      this.$store.commit("map/initViewState")
    },
  },
  computed: {
    ...mapState('map',{
      deck: state => state.deck,
      lastViewState: state => state.lastViewState,
      viewStates: state => state.viewStates,
    }),
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
