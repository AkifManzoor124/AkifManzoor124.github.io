import axios from 'axios'
import accessToken from '../config'

//axios header  
axios.defaults.headers.common = { 'Authorization': `bearer ${accessToken}` }

const baseUrl = 'https://graph.microsoft.com/'

const getNotes = async () => {
    const response = await axios.get(`${baseUrl}v1.0/me/onenote/notebooks/0-E74DAF189C1C39AC!2796/sections`)
    return response.data
}

export default { getNotes }