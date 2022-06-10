<template>
  <div class="bottom-component">
    <header-component title="Story Slides" />
    <div class="clip-sequence">
      <div class="clip"
        v-for="(value, index) in viewStates"
        :key="`clip-${index}`"
      >
        <clip-component
          v-if="!removedClips.includes(index)"
          :view-state="value"
          :index="index"
        />
        <camera-component
          v-if="index !== viewStates.length - 1 && !removedClips.includes(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderComponent from "../HeaderComponent.vue";
import CameraComponent from "./BottomView/CameraComponent.vue";
import ClipComponent from "./BottomView/ClipComponent.vue";

export default {
  name: "BottomComponent",
  components: { HeaderComponent, ClipComponent, CameraComponent },
  computed: {
    ...mapState("map", {
      viewStates: (state) => state.viewStates,
      removedClips: (state) => state.removedClips,
    }),
  },
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
  margin: 5px 10px;
  display: flex;
  overflow: auto;
  align-items: center;
}
.clip {
  display: flex;
  width: fit-content;
  align-items: center;
}
</style>