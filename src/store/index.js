import Vue from 'vue'
import Vuex from 'vuex'
// import client from 'api-client'

Vue.use(Vuex)

const userModule = {
    state: {
        user: {
            id: "250025",
            name: "Gabriel Moawad",
            image: "base64",
            mobilityConcept: {
                distance: 899000,
                pollution: 17600
            },
            egencia: {
                flightDistance: 899000
            },
            plantedTrees: 3    
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setFlightDistance(state, distance) {
            state.user.egencia.flightDistance = distance;
        },
        setMobilityDistance(state, distance) {
            state.user.mobilityConcept.distance = distance;
        },
        setMobilityPollution(state, pollution) {
            state.user.mobilityConcept.pollution = pollution;
        }
    },
    actions: {
        fetchPosts ({commit}) {
            return client
            .fetchPosts()
            .then(user => commit('setUser', user))
        }
    },
    getters: {
        user: state => state.user,
        flightDistance: state => state.user.egencia.flightDistance,
        flightPollution: state => state.user.egencia.flightDistance * 115,
        mobilityDistance: state => state.user.mobilityConcept.distance,
        mobilityPollution: state => state.user.mobilityConcept.pollution,
        plantedTrees: state => state.user.plantedTrees
    }
}

const parkModule = {
    state: {
        id: "250025",
        name: "Park",
        level: 2,
        address: "Reykjavikplein 2",
        treeTotal: 3,
        creationDate: "06-28-2019",
        lastUpdated: "06-28-2019",
        facilities: {
            toilet: true,
            restaurant: true,
            playground: true,
            fountain: false
        }
    },
    mutations: {
        incrementTrees(state) {
            state.treeTotal++;
        }
    },
    actions: {},
    getters: {}
}

export const store = new Vuex.Store({
    modules: {
        user: userModule,
        park: parkModule
    }
})
