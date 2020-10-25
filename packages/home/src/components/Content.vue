<template>
  <!-- Remote view breaks when you have multiple fragments on SFC -->
  <!-- <div>Test</div> -->
  <div>
    <div style="color: red">{{ title }}</div>
    <!-- Button component when Using in SFC -->
    <ButtonRenderFunc />
  </div>
</template>
<script>
import { defineComponent, defineAsyncComponent } from "vue";
import ButtonRenderFunc from "./ButtonRenderFunc";
export default defineComponent({
  components: { ButtonRenderFunc },
  data() {
    return {
      title: "Remote Component in Action..",
    };
  },
});
</script>
