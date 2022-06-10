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
import { LinearInterpolator } from "@deck.gl/core";
import video from "@/assets/global_terrorism_video"
// import video from "@/assets/sh_covid19_video"

export default {
  name: "ButtonComponent",
  component: { FontAwesomeIcon },
  data() {
    return {
      transition: video,
    }
  },
  methods: {
    save() {
      console.log("Save a clip");
      this.$store.commit("map/addViewState", this.lastViewState)
    },
    async recover() {
      console.log("Recover the map");
      this.deck.setProps({
        initialViewState: {
          ...this.updatedStates[0],
          transitionInterpolator: new LinearInterpolator(),
          transitionDuration: 100,
        }
      })
      await this.timeout(100);
    },
    async play() {
      console.log("Play the video");
      if (!this.updatedStates) return;

      this.$store.commit('map/changeNarrationVisible', true);

      this.deck.setProps({
        initialViewState: {
          ...this.updatedStates[this.updatedStates.length-1],
        }
      })
      await this.timeout(100);

      for (var i=0; i < this.updatedStates.length; i++) {
        this.deck.setProps({
          initialViewState: {
            ...this.updatedStates[i],
            transitionInterpolator: new LinearInterpolator(),
            transitionDuration: this.transition[i].duration,
          }
        })
        this.$store.commit('map/changeNarration', this.narrations[i-1]??'');
        await this.timeout(this.transition[i].duration)
      }
    },
    restart() {
      console.log("Restart")
      this.$store.commit("map/initViewState")
    },
    timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    },
  },
  computed: {
    ...mapState('map',{
      deck: state => state.deck,
      lastViewState: state => state.lastViewState,
      viewStates: state => state.viewStates,
      removedClips: state => state.removedClips,
      narrations: state => state.narrations,
      narrationVisible: state => state.narrationVisible,
    }),
    updatedStates() {
      return this.viewStates.filter((_, index)=>!this.removedClips.includes(index))
    }
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
