import axios from './api'

const AuthService = {
    async userRegister(user) {
        const result = await axios.post('/users', { user })
        return result.data
    },
    async userLogin(user) {
        const result = await axios.post('/users/login', { user })
        return result.data
    },
    async getUser() {
        const { data } = await axios.get('/user')
        return data
    },
}

export default AuthService