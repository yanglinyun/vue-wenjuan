import axios from 'axios'
import qs from 'qs'

const ax = axios.create({
  baseURL: '/apitest',
  timeout: 10000,
  withCredentials: true,
  async: true,
  crossDomain: true,
  headers: {}
})

ax.interceptors.request.use(
  req => {
    if (req.method === 'post') {
      req.data = req.data
    } else if (req.method === 'get') {
      req.url = req.url + '?' + qs.stringify(req.data, { indices: false })
    }
    return req
  },
  error => {
    return Promise.reject(error)
  }
)

ax.interceptors.response.use(
  res => {
    if (res.data.code === 200) {
      return res.data
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default ax
