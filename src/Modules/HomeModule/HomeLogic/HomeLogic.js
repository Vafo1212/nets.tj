import axios from 'axios'
import { url } from '../../url/url'

export const homeSlider = async () => {
   return await axios.get(`${url}sliders/`)
}
export const homeTerif = async () => {
   return await axios.get(`${url}tarifs/`)
}