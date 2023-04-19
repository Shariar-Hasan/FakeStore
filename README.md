# FakeStore

FakeStore is a JavaScript package that provides a simple way to store, retrieve, and delete items from local storage in the browser. It uses object-oriented programming principles to provide a clean and easy-to-use interface.

## Installation

To use FakeStore, simply download the code from this repository and include it in your project.
You can install the package using npm:

```
npm install @ethico/fakestore
```

Alternatively, you can download the `FakeStore.js` file and include it in your project manually.
or You can use the CDN for it

```html
<script src="https://cdn.jsdelivr.net/gh/Shariar-Hasan/FakeStore@1.0.0/src/FakeStore.js"></script>
```

for importing :

```javascript
import FakeStore from "@ethico/fakestore";
```

## Usage

Creating a new instance of the FakeStore class requires specifying the name of the database to create or access:

```javascript
const store = new FakeStore("mydb");
```

### Methods

FakeStore provides several methods for interacting with the database:

#### `get(key)`

Retrieves one or more items from the database. If a key is provided, only the item with that key will be returned. Otherwise, all items in the database will be returned.

```javascript
// get all items
const allItems = store.get();

// get item with specific key
const singleItem = store.get("abc123");
```

#### `push(key, item)`

Adds an item to the database. If a key is provided, the item will be added with that key. Otherwise, a unique ID will be generated for the item. If an item with the same key already exists in the database, an error will be thrown.

```javascript
// add item with automatically generated key
store.push({ name: "John", age: 30 });

// add item with specified key
store.push("abc123", { name: "Jane", age: 25 });
```

#### `update(key, item)`

Updates an existing item in the database with new data. The item to update is identified by its key. If either the key or the updated data is missing, an error will be thrown.

```javascript
// update item with specific key
store.update("abc123", { name: "Jane Doe", age: 26 });
```

#### `remove(key)`

Removes one or all items from the database. The item to remove is identified by its key. If no key is provided, then it will delete all item in the database.

```javascript
// remove item with specific key
store.remove("abc123");
```

#### `clear()`

Drop/ Delete all databases from the localstorage.

```javascript
// clear all items
store.clear();
```

#### `createUID()`

Generates a unique ID for an item. This method is mainly used internally by `push()` when a key is not provided. But you can use it for making key to push data to FakeStore

```javascript
// generate unique ID
const id = store.createUID(); // 2319075320750
const id2 = store.createUID({ start: "user-" });// user-2319075320750
const id3 = store.createUID({ end: "-id" });// 2319075320750-id
const id4 = store.createUID({ start: "user-", end: "-id" });// user-2319075320750-id
```

## License

This code is released under the MIT License.
