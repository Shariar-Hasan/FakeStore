class FakeStore {
  constructor(dbname) {
    this.dbname = dbname;
    // setting db name if not exist
    if (!localStorage.getItem(dbname)) {
      localStorage.setItem(dbname, JSON.stringify([]));
    }
  }

  // get items according to key or not key
  get(key) {
    try {
      let items = JSON.parse(localStorage.getItem(this.dbname));
      if (key) {
        return items.filter((item) => item[`fs_id`] == key);
      } else {
        return items;
      }
    } catch (err) {
      console.error(err);
    }
  }

  // inserting or updating existing item
  push(key, item) {
    try {
      let items = this.get();
      // if key is not defined
      if (!item) {
        item = key;
        key = this.createUID();
      }
      // if item is not an object
      if (!(typeof item === "object" && Object(item) === item)) {
        throw new Error("Pushed Value must be an object");
      }
      item.fs_id = key;
      const exist = items?.find((it) => it.fs_id === key);
      // if the key is already exist
      if (exist) {
        throw new Error("Key already Exist! use Update method");
      }
      items.push(item);
      localStorage.setItem(this.dbname, JSON.stringify(items));
      return item;
    } catch (err) {
      console.error(err);
    }
  }

  // update according to certein key
  update(key, item) {
    try {
      let items = this.get();
      if (!key || !item) {
        throw new Error("Key or Updated Data missing");
      } else {
        let index = items.findIndex((it) => it.fs_id === key);
        if (!index) {
          throw new Error("Key not matched");
        } else {
          item.fs_id = key;
          items[index] = item;
          localStorage.setItem(this.dbname, JSON.stringify(items));
          return (addedItem = this.get(key));
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  // removing one item or all
  remove(key) {
    try {
      let items = this.get();
      if (key !== undefined && key !== null) {
        const restOfTheItems = items.filter((item) => item.fs_id !== key);
        localStorage.setItem(this.dbname, JSON.stringify(restOfTheItems));
      } else {
        localStorage.setItem(this.dbname, JSON.stringify([]));
      }
    } catch (err) {
      console.error(err);
    }
  }

  // clear the whole database
  clear() {
    localStorage.removeItem(this.dbname);
  }

  // create User ID
  createUID(option = {}) {
    let { start = "", end = "" } = option;
    let id = "" + new Date().getTime();
    start += "";
    end += "";
    return start + id + end;
  }
}
window.FakeStore = FakeStore;
export default FakeStore;

