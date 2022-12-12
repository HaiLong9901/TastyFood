import img from '../assets/Image/user.png'
export const USER_DEFAULT_AVATAR = img
export const API = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000/api/' : 'acasc'
export const LOCAL_STORAGE_TOKEN_NAME = 'accessToken'
