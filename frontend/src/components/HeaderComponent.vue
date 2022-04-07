<template>
  <div class="header">{{ title }}</div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: ["title"],
};
</script>

<style scoped>
.header {
  background-color: #eee;
  margin: 5px;
  padding-left: 10px;
  padding-top: 4px;
  border-radius: 5px;
  height: 30px;
  display: flex;
  align-content: center;
  align-items: center;
}
</style>
