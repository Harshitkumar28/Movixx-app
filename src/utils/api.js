import axios from "axios";
// here axios is used to make HTTP requests in web 
// applications. helps in interaction with APIs 


const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
// yha import ke badle direct double quotes mein api read access wala daal skte ho


const headers = {
    Authorization : "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url,params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}
