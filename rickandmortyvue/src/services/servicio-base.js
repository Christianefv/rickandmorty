import axios from 'axios'
import configService from './config'

const servicio = axios.create({
	baseURL: configService.apiUrl,
})

export default servicio