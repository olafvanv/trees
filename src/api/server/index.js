import axios from 'axios'

export default {
  fetchUser () {
    return axios
      .get('')
      .then(response => response.data)
  }
}