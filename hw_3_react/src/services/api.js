import axios from "axios";

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
};

let axiosInstance = axios.create(options);

const getUsers = () => {
    return axiosInstance.get('/users') //promise
}

const getUser = (id) => {
    return axiosInstance.get('/users/'+id) //promise
}

export {
  getUsers, getUser, axiosInstance
};

