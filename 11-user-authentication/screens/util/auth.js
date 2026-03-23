import axios from "axios";

async function authenticate(mode, email, password) {
    const API_KEY = "..."; // restricted public API key, no production vulnerability!  -  REMOVED API KEY FROM FB
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    });

    const token = response.data.idToken; // Firebase docs

    return token;
}

export function createUser(email, password) { // instead async-await and const token = await... then return token; simply use another approach
    return authenticate('signUp', email, password);
}

export function login(email, password) {
    return authenticate('signInWithPassword', email, password);
}
