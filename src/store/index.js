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
        // fetchPosts ({commit}) {
        //     return client
        //     .fetchPosts()
        //     .then(user => commit('setUser', user))
        // }
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
        parks :[{
        id: "250025",
        name: "Park 1",
        level: 2,
        address: "Reykjavikplein 1",
        treeTotal: 3,
        creationDate: "06-28-2019",
        lastUpdated: "06-28-2019",
        facilities: {
            toilet: true,
            restaurant: true,
            playground: true,
            fountain: false
        }
    },{
        id: "250026",
        name: "Park 2",
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
    },{
        id: "250027",
        name: "Park 3",
        level: 2,
        address: "Reykjavikplein 3",
        treeTotal: 3,
        creationDate: "06-28-2019",
        lastUpdated: "06-28-2019",
        facilities: {
            toilet: true,
            restaurant: true,
            playground: true,
            fountain: false
        }
    }]},
    mutations: {
        incrementTrees(index) {
            this.state[index].treeTotal++;
        }
    },
    actions: {},
    getters: {
        parks: state => state.parks
    }
}

export const store = new Vuex.Store({
    modules: {
        user: userModule,
        parks: parkModule
    }
})
