import { reactive } from 'vue'
import axios from 'axios';

export default {
  getObat: async () => {
    // console.log(process.env.API_ENDPOINT);
    return await axios.get(process.env.API_ENDPOINT + "opname/obat");
    },
    
  getDepo: async () => {
    // console.log(process.env.API_ENDPOINT);
    return await axios.get(process.env.API_ENDPOINT + "opname/depo");
    },
  
  storeOpname: async (obj) => {
    console.log(obj)
    return await axios.post(process.env.API_ENDPOINT + "opname/store", {
      data: obj,
    });
    },
  
    getSettings: async () => {
        return await axios({
            url: process.env.API_ENDPOINT + "settings",
            method: "GET",
        })
    }
};
