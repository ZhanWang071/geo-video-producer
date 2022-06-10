<template>
  <div class="data-import">
    <div class="sub-title">
      <span>Import Data</span>
    </div>

    <div class="import-wrapper">
      <el-select
        v-model="data"
        class="data-example-seletor"
        placeholder="Example"
        size="small"
      >
        <el-option
          v-for="item in examples"
          :key="item.label"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="1"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button type="primary" size="mini">Click to upload</el-button>
      </el-upload>
    </div>

    <div class="sub-title" style="margin-top: 10px">
      <span>Visualization Type</span>
    </div>
    <div class="geovis-cards">
      <div class="geovis-card" v-for="value in GeoVisTypes" :key="value.label">
        <el-card
          shadow="hover"
          :body-style="{
            padding: '2px',
          }"
        >
          <img :src="value.picture" class="image" />
          <div class="vis-label-wrapper">
            <span class="vis-label">{{ value.label }}</span>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import data1 from "@/assets/global_terrorism.json";
import data2 from "@/assets/sh_covid19.json";

export default {
  name: "DataImport",
  data() {
    return {
      fileList: [],
      examples: [
        {
          value: data1,
          label: "全球恐怖袭击事件",
        },
        {
          value: data2,
          label: "上海新冠肺炎疫情",
        },
      ],
      GeoVisTypes: [
        {
          label: "Scatter Plot",
          picture: "/figures/scatterplot-layer.jpg",
        },
        {
          label: "Path",
          picture: "/figures/geojson-layer-paths.png",
        },
        {
          label: "Heatmap",
          picture: "/figures/heatmap-layer.jpg",
        },
        {
          label: "3D Bar Chart",
          picture: "/figures/hexagon-layer.jpg",
        },
        {
          label: "Text",
          picture: "/figures/text-layer.jpg",
        },
      ],
    };
  },
  methods: {
    handlePreview() {},
    handleRemove() {},
    beforeRemove() {},
    handleExceed() {},
  },
  computed: {
    data: {
      get() {
        return this.$store.state.map.data;
      },
      set(value) {
        this.$store.commit("map/updateData", value);
      },
    },
    // ...mapState('map',{
    //   data: state => state.data,
    // }),
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
.geovis-cards {
  display: flex;
  flex-wrap: wrap;
  padding-left: 5px;
}
.image {
  width: 100%;
  display: block;
  transition-property: filter;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}
/* .image:hover {
  opacity: 0.3;
} */
.geovis-card {
  margin-right: 12px;
  margin-bottom: 12px;
  width: 30%;
  height: 130px;
  display: relative;
}
/* .vis-label-wrapper {
  position: absolute;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  font: 1.5em / 20px UberMove, Helvetica, Arial, sans-serif;
  text-align: center;
  color: rgb(255, 255, 255);
  width: 30%;
  height: 30%;
  top: 5%;
  left: 5%;
  border: 1px solid rgb(255, 255, 255);
  opacity: 0;
  transition-property: opacity;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}
.vis-label:hover {
  opacity: 0.7;
} */
.vis-label-wrapper {
  display: flex;
  justify-content: center;
}
.vis-label {
  margin: 4px 0;
  box-sizing: border-box;
  font-size: 14px;
}
.import-wrapper {
  display: flex;
  justify-content: space-around;
}
</style>
