function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const email = "example@example.com";
if (validateEmail(email)) {
    console.log("Email is valid");
} else {
    console.log("Email is invalid");
}