const input = "File names: report.pdf, image.png, document.docx, script.js, data.csv";

const fileRegex = /\b\w+\.(pdf|png|docx|js|csv)\b/g;

const validFiles = input.match(fileRegex);

console.log(validFiles); // ["report.pdf", "image.png", "document.docx", "script.js", "data.csv"]