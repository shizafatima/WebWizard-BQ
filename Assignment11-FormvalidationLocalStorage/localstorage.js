function saveUserData(email, password){
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
}

function getUserData (email, password){
    return{
        email: localStorage.getItem("email") || "",
        password: localStorage.getItem("password") || ""
    }
}