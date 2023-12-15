import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://beautify-yourself-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;