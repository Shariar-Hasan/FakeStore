
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
  database.push(newText);
  //database.push(newText);
  // database.update("1681945622389", {
  //   typedtext: "AMar nam hasan 3000",
  // });
  // database.clear()
  console.log(database.get());
});
