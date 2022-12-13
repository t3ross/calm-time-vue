<script lang="ts" src="./MusicPart.ts" />

<template>
  <div class="container">
    <p class="author" :class="{ authorAppear: currentMusic.author }">
      {{ currentMusic.author ? currentMusic.author : "" }}
    </p>
    <p id="song">
      {{ currentMusic.title ? currentMusic.title : "Play start..." }}
    </p>

    <div class="music-icons">
      <!-- TODO: Disabled class logic  -->
      <i
        class="fa-solid fa-circle-chevron-left"
        :class="{ shake: numberSong == 0 }"
        :id="numberSong == 0 ? 'disabled' : ''"
        @click="prevMusic"
      ></i>
      <i
        class="fa-solid play-button"
        @click="isMusicPlaying ? pauseMusic() : playMusic()"
        :class="isMusicPlaying ? 'fa-circle-pause' : 'fa-circle-play'"
      ></i>
      <i
        class="fa-solid fa-circle-chevron-right"
        :class="{ shake: numberSong == shuffledSongs.length - 1 }"
        :id="numberSong == shuffledSongs.length - 1 ? 'disabled' : ''"
        @click="nextMusic"
      ></i>
    </div>
    <p id="total-songs">
      <span id="firstNum">{{ currentMusic ? numberSong + 1 : "-" }}</span>
      /
      <span id="lastNum">{{ shuffledSongs.length }}</span>
    </p>
  </div>
</template>

<style scoped lang="scss">
.container {
  background: var(--light-blue) url("@/assets/dots.svg") repeat-x 0 65vh;
  background-size: 450px;
  display: grid;
  position: relative;
  grid-template-rows: 1px 60px 20px 1px;
  place-content: center;
  place-items: center;
  padding-bottom: 50px;
  gap: 24px;
  animation: dotsMovement 2.5s linear infinite;

  @keyframes dotsMovement {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 75px;
    }
  }

  .author {
    position: relative;
    color: var(--light-white);
    font-size: 1.3rem;
    z-index: 10;
    top: 60px;
  }

  .authorAppear {
    animation: 1s cubic-bezier(0, 0, 0.19, 0.98) 0.7s authorAppear forwards;
  }

  @keyframes authorAppear {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-60px);
    }
  }
}

#song {
  background-color: var(--light-pink);
  border-radius: 5px;
  color: #8197ccd6;
  font-size: 1.7rem;
  font-weight: bold;
  height: 60px;
  padding: 20px;
  text-align: center;
  width: 300px;
  z-index: 20;
}
.music-icons {
  display: grid;
  grid-template-columns: repeat(3, 50px);
  justify-items: center;
}
.music-icons i {
  color: var(--light-pink);
  cursor: pointer;
  font-size: 3.2rem;
  transition: all 0.3s;
}
.fa-circle-pause {
  cursor: pointer;
}
#total-songs {
  color: var(--light-pink);
  font-size: 1.7rem;
  font-weight: bold;
}

#disabled {
  opacity: 0.4;
  cursor: default;
}
.shake {
  animation: shake 0.6s ease-out;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(1px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-2px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(2px, 0, 0);
  }

  // TODO: Author animation
}
</style>
