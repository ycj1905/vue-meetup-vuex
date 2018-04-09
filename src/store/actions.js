// export const updateValue = ({commit}, payload) => {
//     commit('updateValue', payload);
// };

// export const action2 = () => {};

import * as types from './types';

export default {
    [types.UPDATE_VALUE] : ({commit}, payload) => {
        commit(types.MUTATE_UPDATE_VALUE, payload);
    }
}