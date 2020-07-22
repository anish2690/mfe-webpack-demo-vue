<template>
  <div>
    <img src="./logo.png" />
    <h1>Nav App</h1>
    <Content />
  </div>
</template>

<script>
import { ref } from "vue";
const Content = () => import("main/Content");

export default {
  components: {
    Content,
  },
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };

    return {
      count,
      inc,
    };
  },
};
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
