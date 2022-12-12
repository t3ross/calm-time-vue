import { StateInterface } from "@/store/index";
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
require("@/assets/audio/Megalovania.mp3");

export default defineComponent({
  name: "MusicPart",
  setup() {
    const store = useStore<StateInterface>();

    let index = 0;
    const numberSong = ref(0);
    const shuffledSongs = store.state.musicPlayer.music.sort(
      () => Math.random() - 0.5
    );
    const currentMusic = computed(() => store.state.musicPlayer.musicPlaying);
    const isMusicPlaying = computed(
      () => store.getters["musicPlayer/isMusicPlaying"]
    );
    const audio = new Audio();
    audio.onended = () => nextMusic();

    const playMusic = () => {
      if (!store.state.musicPlayer.musicStarted) {
        store.commit("musicPlayer/playMusic", shuffledSongs[index]);
        store.commit("musicPlayer/truePlayingStatus");
        const nameSong = currentMusic.value.name;
        audio.src = require("@/assets/audio/" + nameSong + ".mp3");
        audio.play();
      } else {
        audio.play();
        store.commit("musicPlayer/truePlayingStatus");
      }
    };

    const nextMusic = () => {
      if (index >= 0 && index < shuffledSongs.length - 1) {
        index += 1;
        numberSong.value = index;
        store.commit("musicPlayer/changeMusicStarted");
        playMusic();
      }
    };

    // TODO: autoNext

    return {
      shuffledSongs,
      currentMusic,
      audio,
      isMusicPlaying,
      playMusic,
      numberSong,
      nextMusic,
      prevMusic: () => {
        if (index > 0 && index <= shuffledSongs.length - 1) {
          index -= 1;
          numberSong.value = index;
          store.commit("musicPlayer/changeMusicStarted");
          playMusic();
        }
      },
      pauseMusic: () => {
        store.commit("musicPlayer/pauseMusic");
        audio.pause();
      },
    };
  },
});
