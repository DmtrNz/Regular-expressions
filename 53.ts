function validatePassword(password: string): boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
}

const password = "Password123";
if (validatePassword(password)) {
    console.log("Password is valid");
} else {
    console.log("Password is invalid");
}