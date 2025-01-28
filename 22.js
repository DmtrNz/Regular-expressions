const input = "Hashtags: #javascript, #webdev, #100DaysOfCode, #invalid-hashtag, #ok";

const hashtagRegex = /#\w+/g;

const validHashtags = input.match(hashtagRegex);

console.log(validHashtags); // ["#javascript", "#webdev", "#100DaysOfCode", "#ok"]