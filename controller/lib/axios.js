const axios = require('axios')
const MY_TOKEN = '7380060884:AAHCIRyEUiutkPtWj3sGmOEtv6k4aAgGt_A'

const MY_URL = `https://api.telegram.org/bot${MY_TOKEN}`

function getAxiosInstance() {
  return {
    get(method, params) {
      return axios.get(`/${method}`, {
        baseURL: MY_URL,
        params
      })
    },
    post(method, data) {
      return axios(
        {
          method: 'post',
          baseURL: MY_URL,
          url: `/${method}`,
          data
        }
      )
    }
  }
}

module.exports = { axiosInstance: getAxiosInstance() }