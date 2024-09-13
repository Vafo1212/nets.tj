import axios from 'axios'
import { url } from '../../url/url';

export const newsData = async () => {
   return await axios.get(`${url}news/`)
}