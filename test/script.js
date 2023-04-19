const database = new FakeStore("foo");
const form = document.getElementById("form");
const typedtext = document.getElementById("typedtext");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!typedtext.value) {
    throw new Error("Type someting first");
    return;
  }
  const newText = {};
  newText[typedtext.name] = typedtext.value;
  database.push(database.createUID(), newText);
  //database.push(newText);
});
console.log(database.get());
