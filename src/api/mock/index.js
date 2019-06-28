import user from './data/user'

const fetch = (mockData, time = 0) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData)
        }, time)
    })
}

export default {
    fetchUser () {
        return fetch(user, 300);
    }
}