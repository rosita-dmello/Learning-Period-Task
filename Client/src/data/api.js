import axios from "axios";

const apiUrl = "http://localhost:3001/";

export const singleFileUpload = async (data) => {
    try {
        await axios.post(apiUrl + "singleFile", data);
    } 
    catch (err) {
        throw err;
    }
}

export const getSingleFiles = async () => {
    try {
        const {data} = await axios.get(apiUrl + "getSingleFiles");
        return data;
    }
    catch (err) {
        throw err;
    }
}

export const multipleFilesUpload = async (data) => {
    try {
        await axios.post(apiUrl + "multipleFiles", data);
    } 
    catch (err) {
        throw err;
    }
}

export const getMultipleFiles = async () => {
    try {
        const {data} = await axios.get(apiUrl + "getMultipleFiles");
        return data;
    }
    catch (err) {
        throw err;
    }
}
