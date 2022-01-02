import axios from "axios";

const apiUrl = "http://localhost:3001/";

export const signupPost = async (formData) => {
    try {
        const {data} = await axios.post(apiUrl + "signup", formData);
        
        return data;
    } 
    catch (err) {
        throw err;
    }
}
export const loginPost = async (formData) => {
    try {
       const {data} = await axios.post(apiUrl + "login", formData);
        console.log(data);
        
        return data;
    } 
    catch (err) {
        throw err;
    }
}

// export const oAuthGet = async () => {
//     try {
//        await axios.get(apiUrl + "auth/google");
//         localStorage.setItem('isAuthorised', 'Yes');
//         // await axios.get(apiUrl + "auth/google");
//         // console.log(data, "Done");
//         // return data;
//     } 
//     catch (err) {
//         throw err;
//     }
// }

export const getUser = async () => {
  try {
    const {data} = await axios.get(apiUrl + "getUser");
    console.log(data);
    return data;

  } catch (err) {
    throw err;
  }
};
// export const checkUser = async() => {
//     try {
//         const response = await axios.get("http://localhost:3001/auth/login/success");
//         console.log(response);
//         return response;
//     }
//     catch (err) {
//         throw err;
//     }
// }
export const artistSignupPost = async (formData) => {
    try {
        const {data} = await axios.post(apiUrl + "artistSignup", formData);
        console.log(data);
        
        return data;
    } 
    catch (err) {
        throw err;
    }
}
export const artistLoginPost = async (formData) => {
    try {
       const {data} = await axios.post(apiUrl + "artistLogin", formData);
       console.log(data);
        return data;
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
