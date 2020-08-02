<template>
  <div>
    <h3>Main App</h3>
    <Content />
    <Button />
  </div>
</template>

<script>
import vue, { ref } from "vue";
import Content from "./components/Content";
import Button from "./components/Button";
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
