import axios from 'axios'
import { url } from '../../url/url';

export const vacanciesItem = async (id) => {
    return await axios.get(`${url}vacancy/${id}/`)
  }