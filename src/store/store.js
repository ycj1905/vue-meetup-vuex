import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter'

// create an object which can acces with the name actions
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex);

// Share the same Namespaces
export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    mutations,
    actions,
    modules: {
        counter
    }
});