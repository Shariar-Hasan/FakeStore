# FakeStore

[![npm version](https://img.shields.io/npm/v/@ethico/fakestore)](https://www.npmjs.com/package/@ethico/fakestore)
[![License](https://img.shields.io/github/license/Shariar-Hasan/FakeStore)](https://github.com/Shariar-Hasan/FakeStore/LICENSE)

FakeStore is a JavaScript package that provides a simple way to store, retrieve, and delete items from local storage in the browser. It uses object-oriented programming principles to provide a clean and easy-to-use interface.

## Table of Content
- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)
- [Contribution](#contribution)
- [License](#license)
## Installation

To use FakeStore, simply download the code from this repository and include it in your project.
You can install the package using npm:

```
npm install @ethico/fakestore
```

Alternatively, you can download the `FakeStore.js` file and include it in your project manually.
or You can use the CDN for it

```html
<script src="https://cdn.jsdelivr.net/gh/Shariar-Hasan/FakeStore/dist/FakeStore.min.js"></script>
```

for importing :

```javascript
import FakeStore from "@ethico/fakestore";
```

## Usage

Creating a new instance of the FakeStore class requires specifying the name of the collection to create or access:

```javascript
const store = new FakeStore("mydb");
```

Best way to do this, create a global `store.js` and inside it, write likie this

```javascript
export const store = new FakeStore("my collection");
```

if you have multiple collection, try this:

```javascript
export const collection_1 = new FakeStore("collection_1");
export const collection_2 = new FakeStore("collection_2");
export const collection_3 = new FakeStore("collection_3");
```


### Methods

FakeStore provides several methods for interacting with the database:

#### `get(key)`

Retrieves one or more items from the database. If a key is provided, only the item with that key will be returned. Otherwise, all items in the database will be returned.

```javascript
// get all items
const allItems = store.get();

// get item with specific key
const singleItem = store.get("1fk2str");
```

#### `push(key, item)`

Adds an item to the database. If a key is provided, the item will be added with that key. Otherwise, a unique ID will be generated for the item. If an item with the same key already exists in the database, an error will be thrown.

```javascript
// add item with automatically generated key
store.push({ name: "John", age: 30 });

// add item with specific key
store.push("1fk2str", { name: "Jane", age: 25 });
```
** **

#### `update(key, item)`

Updates an existing item in the database with new data. The item to update is identified by its key. If either the key or the updated data is missing, an error will be thrown.

```javascript
// update item with specific key
store.update("1fk2str", { name: "Jane Doe", age: 26 });
```

#### `remove(key)`

Removes one or all items from the database. The item to remove is identified by its key. If no key is provided, then it will delete all item in the database.

```javascript
// remove item with specific key
store.remove("1fk2str");
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
const id = store.createUID(); 
//Output: 2319075320750
const id2 = store.createUID({ start: "user-" }); 
//Output: user-7503207231950
const id3 = store.createUID({ end: "-id" }); 
//Output: 3207523190750-id
const id4 = store.createUID({ start: "user-", end: "-id" }); 
//Output: user-7532231900750-id
```

## Contribution

Contribution on this repository is welcomed. Feel free to contribute, with your excellent idea.

## License

This code is released under the MIT License.
