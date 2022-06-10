const state = () => ({
    radius: 6,
    scale: 60,
    pixels: 25,
    color: '#FE3C00',
})

const getters = {}

const actions = {}

const mutations = {
    changeRadius(state, value) {
        state.radius = value;
    },
    changeScale(state, value) {
        state.scale = value;
    },
    changePixels(state, value) {
        state.pixels = value;
    },
    changeColor(state, value) {
        state.color = value;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}