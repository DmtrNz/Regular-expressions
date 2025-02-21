const input = "ISBNs: 978-3-16-148410-0, 123-4567890123, 978-0-306-40615-7, invalid-isbn";

const isbnRegex = /\b\d{3}-\d-\d{2}-\d{6}-\d\b/g;

const validISBNs = input.match(isbnRegex);

console.log(validISBNs); // ["978-3-16-148410-0", "978-0-306-40615-7"]