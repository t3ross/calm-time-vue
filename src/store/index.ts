import { createStore } from "vuex";

// My custom modules
import playerModule from "./musicPlayer";
import { PlayerState } from "./musicPlayer/state";

export interface StateInterface {
  musicPlayer: PlayerState;
}

export default createStore<StateInterface>({
  modules: {
    musicPlayer: playerModule,
  },
});
