const input = "Usernames: user_123, admin, test-user, invalid@user, 123user";

const usernameRegex = /\b[a-zA-Z0-9_-]+\b/g;

const validUsernames = input.match(usernameRegex);

console.log(validUsernames); // ["user_123", "admin", "test-user", "123user"]