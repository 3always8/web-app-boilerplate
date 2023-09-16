import { AxiosResponse } from 'axios'
import defaultClient from './defaultClient'

const BASE = 'v1/users/'
export const getUsers = () => {
    return defaultClient.get(`${BASE}`)
}
