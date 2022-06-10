<template>
  <div class="camera-library">
    <div class="sub-title">
      <span>Narrative Purpose</span>
    </div>
    <div class="tags">
      <el-tag
        type="danger"
        class="tag"
        :effect="emphasis ? 'dark' : 'plain'"
        @click="clickEmphasis"
        round
      >
        Emphasis
      </el-tag>
      <el-tag
        class="tag"
        :effect="overview ? 'dark' : 'plain'"
        @click="clickOverview"
        round
      >
        Overview
      </el-tag>
      <el-tag
        type="warning"
        class="tag"
        :effect="comparison ? 'dark' : 'plain'"
        @click="clickComparison"
        round
      >
        Comparison
      </el-tag>
      <el-tag
        type="success"
        class="tag"
        :effect="suspense ? 'dark' : 'plain'"
        @click="clickSuspense"
        round
      >
        Suspense
      </el-tag>
      <el-tag
        type="info"
        class="tag"
        :effect="coherence ? 'dark' : 'plain'"
        @click="clickCoherence"
        round
      >
        Coherence
      </el-tag>
    </div>

    <div class="sub-title">
      <span>Camera Effects</span>
    </div>
    <div class="camera-effects">
      <div class="single-camera" v-for="(item, index) in cameras"
      :key="index" v-show="showCamera(item.purpose)">
        <el-button :type="types[item.purpose]" size='small' plain >{{item.value}}</el-button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "CameraLibrary",
  data() {
    return {
      types:{
        'emphasis': 'danger',
        'overview': 'primary',
        'comparison': 'warning',
        'suspense': 'success',
        'coherence': 'info',
      },
      emphasis: true,
      overview: false,
      comparison: false,
      suspense: false,
      coherence: false,
      cameras: [
        {
          purpose: 'emphasis',
          value: 'Push in to zoom out the map based on the geospatial target',
        },
        {
          purpose: 'emphasis',
          value: 'Pan to appear the geospatial target',
        },
        {
          purpose: 'emphasis',
          value: 'Change the focal to update the main geospatial target',
        },
        {
          purpose: 'emphasis',
          value: 'Tilt to reveal the data attributes encoded with height',
        },
        {
          purpose: 'emphasis',
          value: 'Arc to draw attention to the specific geospatial target',
        },
        {
          purpose: 'emphasis',
          value: 'Roll to show a geospatial target from different perspectives',
        },
        {
          purpose: 'emphasis',
          value: 'Pan to reveal the data horizontally',
        },
        {
          purpose: 'overview',
          value: 'Arc around a single target or the center of multiple targets',
        },
        {
          purpose: 'overview',
          value: 'Pull out to show the surrouding environment',
        },
        {
          purpose: 'overview',
          value: 'Whip pan to a group of targets one by one',
        },
        {
          purpose: 'comparison',
          value: "Whip pan to compare similar targets in two scenes", 
        },
        {
          purpose: 'comparison',
          value: "Pull out from one target to its neighbor targets", 
        },
        {
          purpose: 'suspense',
          value: "Tracking to follow the target's movement", 
        },
        {
          purpose: 'coherence',
          value: 'Push in slowly to increase dynamics',
        },
        {
          purpose: 'coherence',
          value: 'Pull out slowly to increase dynamics',
        },
        {
          purpose: 'coherence',
          value: 'Arc to increase dynamics for the static geospatial target',
        },
      ]
    };
  },
  methods: {
    showCamera(purpose) {
      if (purpose==='emphasis') {return this.emphasis}
      else if (purpose==='overview') {return this.overview}
      else if (purpose==='comparison') {return this.comparison}
      else if (purpose==='suspense') {return this.suspense}
      else {return this.coherence}
    },
    clickEmphasis() {
      this.emphasis = !this.emphasis;
    },
    clickOverview() {
      this.overview = !this.overview;
    },
    clickComparison() {
      this.comparison = !this.comparison;
    },
    clickSuspense() {
      this.suspense = !this.suspense;
    },
    clickCoherence() {
      this.coherence = !this.coherence;
    },
  },
};
</script>

<style scoped>
.sub-title {
  margin-bottom: 10px;
  margin-left: 5px;
  font-weight: bold;
  font-size: larger;
}
.tags {
  margin-left: 5px;
  margin-bottom: 14px;
}
.tag {
  margin-bottom: 6px;
  margin-right: 5px;
  cursor: pointer;
}
.single-camera {
  display: flex;
    justify-content: center;
    margin: 5px 5px;
}
button {
  width: 100%;
}
.camera-effects {
  overflow-x: hidden;
  overflow-y: auto;
  height: 230px;
}
</style>
