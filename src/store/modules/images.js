import axios from 'axios'

//TODO: HIDE KEY

const images = {
    namespaced: true, 
  state: {
      images: []
  },
  mutations: {
      SET_IMAGES(state, data){
          state.images = data
      }
  },
  actions: {
      loadImages({commit}) {
          axios
              .get('https://api.unsplash.com/photos/?client_id=wB7ykfkIlgkyyxyokGSHzf3DzzDQKESX5UrU1Ai4TPU')
              .then(resp => {
                  commit('SET_IMAGES', resp.data)
              })
              .catch(err => console.log(err))
      }
  }
}


export default images