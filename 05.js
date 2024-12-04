const phoneNumber = "123-456-7890";
const formattedNumber = phoneNumber.replace(/(\d{3})-(\d{3})-(\d{4})/, "($1) $2-$3");
console.log(formattedNumber);

const htmlString = "<div>Content</div><div>More Content</div>";
const divContents = htmlString.match(/<div>(.*?)<\/div>/g);
console.log(divContents);

const dateString = "2023-10-05";
const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(dateString);
console.log(isValidDate);

const password = "Password123!";
const isStrongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
console.log(isStrongPassword);

const url = "https://www.example.com";
const isValidUrl = /^https?:\/\/[^\s/$.?#].[^\s]*$/.test(url);
console.log(isValidUrl);
