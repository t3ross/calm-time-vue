<template>
  <div class="parts-container">
    <MusicPart />
    <QuotePart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import QuotePart from "@/components/QuotePart.vue";
import MusicPart from "@/components/music-part/MusicPart.vue";

export default defineComponent({
  name: "HomeView",
  components: { QuotePart, MusicPart },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.parts-container {
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  margin: 0 auto;
  max-width: 1500px;
  overflow: hidden;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
}
</style>
