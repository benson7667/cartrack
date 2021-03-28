import axios, { AxiosRequestConfig } from 'axios'
import config from '../config'

const agent = axios.create({
  baseURL: config.apiHost,
})

const get = (uri: string, options: AxiosRequestConfig = {}) => agent.get(uri, options)

// TODO: ADD POST, PUT, DELETE

export { get }
