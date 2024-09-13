import axios from 'axios'
import { url } from '../../url/url';

export const newsItemData = async (id) => {
   return await axios.get(`${url}news/${id}/`)
}