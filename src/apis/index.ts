import { get } from '../utils/network'

export const getAllUsers = () => get('/users').then((res) => res.data)
