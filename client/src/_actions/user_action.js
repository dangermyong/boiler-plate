import axios from 'axios'

export function loginUser(dataToSubmit) {
  const request = axios.post('/api/users/login', body) 
    .then(res => { res.data })
  return {
    type: "LOGIN_USER",
    payload: req
  }
}