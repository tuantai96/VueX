import Vuex from 'vuex'
import Vue from 'vue'
import Result from './modules/Result.js'

import * as getters from './getters.js'
import * as actions from './actions.js'
import * as mutations from './mutations.js'

// Create a new index instance.
export const index = new Vuex.Store({
    state: {
        value: ''
    },
    getters,
    mutations,
    actions,
    modules: {
        Result
    }
})

