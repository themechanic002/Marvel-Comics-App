import axios from "axios";

var hash = CryptoJS

const instance = axios.create({
  baseURL: "http://gateway.marvel.com",
  params: {
    ts: `${Date.now()}`,
    apikey: "e2fd3ebb772c7f743f4bdd86a63d91ba",
    hash: "62358b2dbd6adc8aed0e6d49a13575181a332ee9"
  }
});

export default instance;