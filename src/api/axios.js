import axios from "axios";
import CryptoJS from 'crypto-js'

// var p_ts = `${Date.now()}`;
// var p_apikey = "e2fd3ebb772c7f743f4bdd86a63d91ba";
// var p_hash = CryptoJS.MD5(p_ts + "62358b2dbd6adc8aed0e6d49a13575181a332ee9" + p_apikey);



const instance = axios.create({
  baseURL: "http://gateway.marvel.com",
  params: {
    ts: `${Date.now()}`,
    apikey: "e2fd3ebb772c7f743f4bdd86a63d91ba",
    hash: CryptoJS.MD5(`${Date.now()}62358b2dbd6adc8aed0e6d49a13575181a332ee9e2fd3ebb772c7f743f4bdd86a63d91ba`).toString()
  }
});

export default instance;