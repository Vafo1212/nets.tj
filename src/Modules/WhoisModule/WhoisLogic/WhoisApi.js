import axios from "axios"

export const getWhois = async (domain) =>{
    return await axios.get(`https://nets.tj/nic/?domain=${domain}`)
}