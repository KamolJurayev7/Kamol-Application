import axios from './api'

const AuthService = {
    async userRegister(user) {
        const result = await axios.post('/users', { user })
        return result.data
    },
    async userLogin(user) {
        const result = await axios.post('/users/login', {user})
        return result.data
    },
    // async getUser(){
    //     return await axios.get('/users')
    // },
}

export default AuthService