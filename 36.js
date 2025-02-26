const phoneNumber = "123-456-7890";
const formattedNumber = phoneNumber.replace(/(\d{3})-(\d{3})-(\d{4})/, "($1) $2-$3");
console.log(formattedNumber);

const htmlString = "<div>Content</div><div>More Content</div>";
const divContents = htmlString.match(/<div>(.*?)<\/div>/g);
console.log(divContents);
