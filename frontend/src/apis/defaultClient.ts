import axios, { AxiosError, AxiosResponse } from 'axios'
import Cookies from 'js-cookie'

const baseURL = `http://${process.env.REACT_APP_SERVER_IP}:8080/api/`

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'

const defaultClient = axios.create({ baseURL, withCredentials: true })

// 요청 인터셉터
defaultClient.interceptors.request.use(
  (config) => {
    if (config.headers) {
      const token = Cookies.get('csrftoken')
      if (token) {
        config.headers.Authorization = token
      }
    }

    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// 응답 인터셉터
defaultClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default defaultClient