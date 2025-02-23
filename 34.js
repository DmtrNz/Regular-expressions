const input = "HTML tags: <div>, <p class='text'>, </p>, <img src='image.png'>, <invalid>";

const htmlTagRegex = /<[^>]+>/g;

const validTags = input.match(htmlTagRegex);

console.log(validTags); // ["<div>", "<p class='text'>", "</p>", "<img src='image.png'>"]