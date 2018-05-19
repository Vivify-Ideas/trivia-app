import { TriviaService } from './../services/TriviaService';

export const TriviaModule = {
  state: {
    trivias: []
  },
  getters: {
    getTrivias(state) {
      return state.trivias;
    }
  },
  mutations: {
    setTrivias(state, trivias) {
      state.trivias = trivias;
    }
  },
  actions: {
    // async-await example
    // you can always use promises as callbacks
    // just don't forget to remove async-await words
    async fetchTrivias(store) {
      const {data} = await TriviaService.getRandomTrivias();
      store.commit('setTrivias', data);
      // TriviaService.getRandomTrivias().then(({ data }) => {
      //   store.commit('setTrivias', data);
      // });
    }
  }
}