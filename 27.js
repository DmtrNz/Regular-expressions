const input = "Mentions: @user1, @user_2, @test-user, @invalid@user, @123";

const mentionRegex = /@\w+/g;

const validMentions = input.match(mentionRegex);

console.log(validMentions); // ["@user1", "@user_2", "@test-user", "@123"]