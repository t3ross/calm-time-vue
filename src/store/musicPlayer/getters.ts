import { GetterTree } from "vuex";
import { StateInterface } from "../index";
import { PlayerState } from "./state";

const getters: GetterTree<PlayerState, StateInterface> = {
  isMusicPlaying(state) {
    return !!state.isPlaying;
  },
};

export default getters;
