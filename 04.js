const age = 17;
const canVote = age >= 18 ? "Может голосовать" : "Не может голосовать";
console.log(canVote);

const balance = 100;
const purchaseAmount = 150;
const transactionStatus = balance >= purchaseAmount ? "Покупка успешна" : "Недостаточно средств";
console.log(transactionStatus);

const subscriptionActive = true;
const accessLevel = subscriptionActive ? "Премиум" : "Бесплатный";
console.log(accessLevel);

const timeOfDay = "утро";
const activity = timeOfDay === "утро" ? "Завтрак" : timeOfDay === "день" ? "Работа" : "Отдых";
console.log(activity);

const isRaining = false;
const takeUmbrella = isRaining ? "Возьми зонт" : "Зонт не нужен";
console.log(takeUmbrella);
