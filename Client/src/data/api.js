import axios from "axios";

const apiUrl = "http://localhost:3001/";

export const signupPost = async (data) => {
    try {
        await axios.post(apiUrl + "signup", data);
        console.log("done signing up");
        localStorage.setItem('isAuthorised', 'Yes');
    } 
    catch (err) {
        throw err;
    }
}
export const loginPost = async (formData) => {
    try {
       const {data} = await axios.post(apiUrl + "login", formData);
        console.log(data);
        localStorage.setItem('isAuthorised', 'Yes');
        return data;
    } 
    catch (err) {
        throw err;
    }
}

export const artistSignupPost = async (data) => {
    try {
        await axios.post(apiUrl + "artistSignup", data);
        console.log("done signing up as artist");
        localStorage.setItem('isAuthorised', 'Yes');
    } 
    catch (err) {
        throw err;
    }
}
export const artistLoginPost = async (data) => {
    try {
       const receivedData = await axios.post(apiUrl + "artistLogin", data);
        localStorage.setItem('isAuthorised', 'Yes');
    } 
    catch (err) {
        throw err;
    }
}
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
