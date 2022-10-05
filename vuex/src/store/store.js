import Vuex from 'vuex'

// Create a new store instance.
export const store = new Vuex.Store({
    state: {
        result: 0
    },
    getters: {
        result: state => {
            return state.result;
        },
        tenResult: state => {
            return state.result * 10;
        },
        nameResult: state => {
            return state.result + " name product";
        }
    },
    mutations: {
        increment(state) {
            state.result++;
        },
        decrement(state) {
            state.result--;
        }
    },
    actions: {
        increment: ({commit}) => {
            commit('increment');
        },
        asyncDecrement: ({commit}) => {
            setTimeout(() => {
                commit('decrement')
            }, 2000)
        }
    }
})

