<template>
  <div>
    <img src="./logo.png" width="30" />
    <h1>Layout App</h1>
    <Content />
    <Button />
  </div>
</template>

<script>
import { ref } from "vue";
const Content = () => import("home/Content");
const Button = () => import("home/Button");

// import Content from "mainRemote/Content";
// import Button from "mainRemote/Button";

export default {
  components: {
    Content,
    Button,
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
