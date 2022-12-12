import { Module } from "vuex";
import { StateInterface } from "../index";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state, { PlayerState } from "./state";

const playerModule: Module<PlayerState, StateInterface> = {
  //Genérico <cómoLuceElEstadoDelMódulo, comoLuceElEstadoGlobal>
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default playerModule;
