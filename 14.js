const items = ["book", "pen", "notebook", "laptop", "phone"];
const searchTerm = "note";
const foundItems = items.filter(item => item.includes(searchTerm));
console.log(foundItems);