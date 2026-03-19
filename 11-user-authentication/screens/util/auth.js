import axios from "axios";

export async function createUser(email, password) {
    const API_KEY = "AIzaSyDmf1Vh-rF9HHCfi-1uYnsEFLFVzop7SbI";
    
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
        email: email,
        password: password,
        returnSecureToken: true
    }
  );
}
