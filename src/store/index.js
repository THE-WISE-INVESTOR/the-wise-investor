import {createStore} from 'vuex';

const store=createStore({
    state: {
        authenticated: false
    },
    mutations: {
        setAuthentication(state, status) {
            state.authenticated = status;
        }
    }
}
)

export default store;