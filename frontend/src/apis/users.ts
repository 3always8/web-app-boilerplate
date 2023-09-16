import { AxiosResponse } from 'axios'
import defaultClient from './defaultClient'

const BASE = '/users'
export const getUsers = () => {
    return defaultClient.get(`${BASE}`)
}