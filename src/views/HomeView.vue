<template>
  <div class="parts-container">
    <MusicPart />
    <QuotePart />
    <header>
      <p class="header-text">Enjoying <strong>/</strong> Life</p>
      <i class="fa-solid fa-face-smile-beam"></i>
    </header>
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

<style scoped lang="scss">
.parts-container {
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  margin: 0 auto;
  max-width: 1500px;
  width: auto;
  overflow: hidden;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);

  header {
    align-items: center;
    border-bottom: 4px solid rgba(255, 255, 255, 0.5);
    display: flex;
    font-size: 1.5rem;
    gap: 16px;
    height: 70px;
    position: absolute;
    justify-content: flex-end;
    padding-right: 24px;
    z-index: 10;
    max-width: inherit;
    width: 100%;

    .fa-face-smile-beam {
      font-size: 24px;
      color: #4f71b3;
    }
    p {
      font-size: 1.7rem;
    }
    strong {
      padding: 8px;
    }
  }
}
</style>
