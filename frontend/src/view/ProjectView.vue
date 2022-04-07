<template>
  <div class="project-view">
    <div class="header-container">
      <div class="header">
        <p class="header-text">Geo Video Producer</p>
      </div>
    </div>

    <div class="content-container">
      <div class="top-container">
        <div class="left-container">
          <LeftComponent />
        </div>

        <div class="right-container">
          <RightComponent />
        </div>
      </div>

      <div class="bottom-container">
        <BottomComponent />
      </div>
        
    </div>
  </div>
</template>

<script>
import LeftComponent from "@/components/ProjectView/LeftComponent";
import RightComponent from "@/components/ProjectView/RightComponent";
import BottomComponent from "@/components/ProjectView/BottomComponent";

export default {
  name: "ProjectView",
  components: {
    LeftComponent,
    RightComponent,
    BottomComponent
  },
};
</script>

<style scoped>
.project-view {
  height: inherit;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #eee;
}
.header-container {
  height: 50px;
  background-color: black;
}
.header {
  height: 100%;
  display: flex;
  align-items: center;
}
.header-text {
  margin-left: 10px;
  font-size: 1.6em;
  color: rgb(255, 255, 255);
}
.content-container {
  height: 800px;
  width: 100%;
}
.top-container {
  height: calc(100% - 300px);
  width: 100%;
  display: flex;
  overflow: hidden;
}
.left-container {
  width: 400px;
  height: 100%;
  flex: none;
  padding: 0;
  left: 0;
}
.right-container {
  width: calc(100% - 400px);
  height: 100%;
  flex: none;
  justify-content: center;
  align-items: center;
}
.bottom-container {
  height: 300px;
  width: 100%;
}
</style>