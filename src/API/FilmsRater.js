import axios from 'axios'

export default axios.create({
    baseURL: 'https://stormy-dusk-84915.herokuapp.com/api/v1/films'
})