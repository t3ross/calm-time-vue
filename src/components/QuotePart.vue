<template>
  <main>
    <img src="@/assets/Moon.svg" alt="Moon Image" />
    <span>
      It's the journey that matters, soak it in. Learn lessons out of it. Impact
      positively so that if you never get to your destination, at least you'd
      leave a legacy to be remembered.
    </span>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuotePart",
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
p {
  display: inline;
}
.la-smile-beam {
  color: red;
}

span {
  font-size: 1.8rem;
  width: 50%;
  display: flex;
  word-spacing: 2px;
  width: 400px;
  text-align: justify;
}
main {
  // background-position: 0 100%;
  // background-size: 750px;
  background: url("@/assets/mountain-small.svg") #fff no-repeat 0 50vh;
  display: grid;
  gap: 50px;
  grid-template-rows: 120px 120px;
  height: 100vh;
  padding-top: 20%;
  place-items: center;

  img {
    width: 120px;
  }
}
</style>
