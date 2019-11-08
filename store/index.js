export const state = () => ({
  counter: 0,
  perSecond: 0,
  perClick: 1,
  prices: {
    addvoters: 10,
    osama: 1000,
    michelleobama: 10000,
    ps4: 250,
  }
});

export const mutations = ({
  INCREMENT_COUNT(state, value) {
    state.counter += value;
  },
  INCREMENT_PER_SECOND(state, value) {
    state.perSecond += value;
  },
  INCREMENT_PER_CLICK(state) {
    state.perClick *= 2;
  },
  SET_PRICE_VALUE(state, name){
    state.prices[name] *= 2;
  },
});

export const actions = ({
  increment({commit}, value) {
    commit('INCREMENT_COUNT', value)
  },
  incrementPerSecond({commit}, value) {
    commit('INCREMENT_PER_SECOND', value);
  },
  incrementPerClick({commit}) {
    commit('INCREMENT_PER_CLICK');
  },
  setPriceValue({commit}, name){
    commit('SET_PRICE_VALUE', name)
  }
});
