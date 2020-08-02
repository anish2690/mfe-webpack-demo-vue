<template>
  <div class="layout-app">
    <!-- host app HOST-->
    <div class="app-label">
      # Hosting App [HOST]
    </div>
    <img src="./logo.png" width="30" />
    <h1>Layout App 1</h1>
    <div class="remote-component">
      <!-- remote-component REMOTE -->
      <div class="app-label">
        #remote-component [REMOTE]
      </div>
      <content-element />
      <button-element />
    </div>
  </div>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";

// const Content = () => import("home/Content");
// const Button = () => import("home/Button");

// import Content from "home/Content";
// import Button from "home/Button";

export default {
  // components: {
  //   Content,
  //   Button,
  // },
  // components: {
  //   Content: defineAsyncComponent(() => import("home/Content")),
  //   Button: defineAsyncComponent(() => import("home/Button")),
  // },
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
.remote-component {
  border: 1px solid blue;
  padding: 10px;
}
.layout-app {
  border: 1px solid green;
  padding: 10px;
}
.app-label {
  padding: 5px 2px;
  font-style: italic;
  font-size: 20px;
  color: gray;
}
</style>
