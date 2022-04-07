<template>
  <div class="test-view">
    <TestComponent/>
  </div>
</template>

<script>
  import TestComponent from "@/components/test-page/TestComponent";

  export default {
    name: 'TestView',
    components: {
      TestComponent,
    }
  }
</script>

<style scoped>

</style>
