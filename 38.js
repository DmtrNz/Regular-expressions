const code = "abc123xyz";
const hasLettersAndNumbers = /[a-z]/.test(code) && /[0-9]/.test(code);
console.log(hasLettersAndNumbers);

const urlPath = "/user/profile";
const isProfilePath = /\/user\/profile$/.test(urlPath);
console.log(isProfilePath);