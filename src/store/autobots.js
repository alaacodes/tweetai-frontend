import axios from '../http';

const state = {
    autobots: [],
    totalAutobots: 0,
    loading: false,
    error: null,
};

const getters = {
    allAutobots: (state) => state.autobots,
    totalAutobots: (state) => state.totalAutobots,
    isLoading: (state) => state.loading,
    error: (state) => state.error,
};

const actions = {
    async fetchAutobots({ commit }, page = 1) {
        commit('setLoading', true);
        try {
            const response = await axios.get(`/autobots?page=${page}`);
            commit('setAutobots', response.data);
            commit('setTotalAutobots', response.headers['x-total-count']); // Example for pagination
        } catch (error) {
            commit('setError', error.message);
        } finally {
            commit('setLoading', false);
        }
    },
};

const mutations = {
    setAutobots: (state, autobots) => (state.autobots = autobots),
    setTotalAutobots: (state, total) => (state.totalAutobots = total),
    setLoading: (state, loading) => (state.loading = loading),
    setError: (state, error) => (state.error = error),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
