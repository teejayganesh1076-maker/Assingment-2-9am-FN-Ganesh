function login(username, password) {
    let correctUser = "abd";
    let correctPass = "1234";

    if (username === correctUser && password === correctPass) {
        return "Login Successful";
    } else {
        return "Try Again";
    }
}
console.log(login("abd", "1234"));
console.log(login("abd", "0000"));