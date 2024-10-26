import axios from "axios";

export const api = axios.create({
    baseURL: "https://dnc-react-api.vercel.app/files/",
});

export const form = axios.create({
    baseURL: "https://api.web3forms.com/",
});
