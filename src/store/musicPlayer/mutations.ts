import { MutationTree } from "vuex";
import { PlayerState } from "./state";

const mutations: MutationTree<PlayerState> = {
  playMusic(state: PlayerState, music: Record<string, string>) {
    state.musicPlaying = music;
    state.musicStarted = true;
  },
  pauseMusic(state: PlayerState) {
    state.isPlaying = false;
  },
  truePlayingStatus(state: PlayerState) {
    state.isPlaying = true;
  },
  changeMusicStarted(state: PlayerState) {
    state.musicStarted = false;
  },
};

export default mutations;
