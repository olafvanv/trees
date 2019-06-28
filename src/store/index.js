import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const userModule = {
    state: {
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
    },
    mutations: {
        setFlightDistance(state, distance) {
            state.egencia.flightDistance = distance;
        },
        setMobilityDistance(state, distance) {
            state.mobilityConcept.distance = distance;
        },
        setMobilityPollution(state, pollution) {
            state.mobilityConcept.pollution = pollution;
        }
    },
    actions: {},
    getters: {
        user: state => state,
        flightDistance: state => state.egencia.flightDistance,
        flightPollution: state => state.egencia.flightDistance * 115,
        mobilityDistance: state => state.mobilityConcept.distance,
        mobilityPollution: state => state.mobilityConcept.pollution,
        plantedTrees: state => state.plantedTrees
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
    getters: {
        flightDistance: state => state.egencia.flightDistance,
        flightPollution: state => state.egencia.flightDistance * 115,
        mobilityDistance: state => state.mobilityConcept.distance,
        mobilityPollution: state => state.mobilityConcept.pollution,
        plantedTrees: state => state.plantedTrees
    }
}

export const store = new Vuex.Store({
    modules: {
        user: userModule,
        park: parkModule
    }
})