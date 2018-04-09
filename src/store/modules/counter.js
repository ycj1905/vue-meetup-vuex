import * as types from '../types';

const state = {
    counter: 0
};

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' Clicks';
    },
};

const mutations = {
    // increment: (state, payload) => {
    //     state.counter += payload;
    // },
    // decrement: (state, payload) => {
    //     state.counter -= payload;
    // },
    [types.MUTATE_DECREMENT_COUNTER]: (state, payload) => {
        state.counter += payload;
    },
    [types.MUTATE_DECREMENT_COUNTER]: (state, payload) => {
        state.counter -= payload;
    },
};

const actions = {
    // increment: (context, payload) => {
    //     context.commit('increment', payload);
    // },
    // decrement: ({ commit }, payload) => {
    //     commit('decrement', payload);
    // },
    // asyncIncrement: ({ commit }, payload) => {
    //     console.log('asyncIncrement');
    //     setTimeout(() => {
    //         commit('increment', payload.by);
    //     },payload.duration);
    // },
    // asyncDecrement: ({ commit }, payload) => {
    //     setTimeout(() => {
    //         commit('decrement', payload.by);
    //     },payload.duration);
    // }
    [types.COUNTER_INCREMENT]: (context, payload) => {
        context.commit('increment', payload);
    },
    [types.COUNTER_DECREMENT]: ({ commit }, payload) => {
        commit('decrement', payload);
    },
    [types.COUNTER_INCREMENT_ASYNC]: ({ commit }, payload) => {
        console.log('asyncIncrement');
        setTimeout(() => {
            commit('increment', payload.by);
        },payload.duration);
    },
    [types.COUNTER_DECREMENT_ASYNC]: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrement', payload.by);
        },payload.duration);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
