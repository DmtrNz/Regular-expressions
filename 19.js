const input = "Date: 2023-10-05, 1999-12-31, 31-12-1999, 2023/10/05, 2023.10.05";

const dateRegex = /\b\d{4}-\d{2}-\d{2}\b/g;

const validDates = input.match(dateRegex);

console.log(validDates); // ["2023-10-05", "1999-12-31"]