export const value = state => {
    return state.value;
}

// export const doubleCounter = state => {
//     return state.value;
// }

import * as types from './types';
export default {
    [types.VALUE] : (state) => {
        return state.value;
    }
}