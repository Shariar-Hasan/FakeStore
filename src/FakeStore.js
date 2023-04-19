class FakeStore {
  constructor(dbname) {
    this.dbname = dbname;
    if (!localStorage.getItem(dbname)) {
      localStorage.setItem(dbname, JSON.stringify([]));
    }
  }
  get(key) {
    if (key) {
      let items = JSON.parse(localStorage.getItem(this.dbname));
      return items.filter((item) => item[`_id`] == key);
    } else {
      return JSON.parse(localStorage.getItem(this.dbname));
    }
  }
  push(key, item) {
    let items = this.get();
    if (!item) {
      item = key;
      key = this.createUID();
    }
    item._id = key;
    const exist = items.find((it) => it._id === key);
    if (exist) {
      throw new Error("Key already Exist");
      return;
    }
    items.push(item);
    localStorage.setItem(this.dbname, JSON.stringify(items));
    return this.get;
  }
  update(key, item) {
    let items = this.get();
    if (!key || !item) {
      throw new Error("Key or Updated Data missing");
    }
    if (key) {
      const restOfTheItems = items.filter((item) => item._id !== key);
      localStorage.setItem(this.dbname, JSON.stringify(restOfTheItems));
    } else {
      localStorage.setItem(this.dbname, JSON.stringify([]));
    }
  }
  remove(key) {
    let items = this.get();
    if (key) {
      const restOfTheItems = items.filter((item) => item._id !== key);
      localStorage.setItem(this.dbname, JSON.stringify(restOfTheItems));
    } else {
      localStorage.setItem(this.dbname, JSON.stringify([]));
    }
  }
  clear() {
    localStorage.removeItem(this.dbname);
  }
  createUID({ start, end } = {}) {
    let id = "" + new Date().getTime();
    if (start) {
      id = start + id;
    }
    if (end) {
      id = id + end;
    }
    return id;
  }
}
// Export the class for CommonJS environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FakeStore;
}

// Export the class for ES6 environments
if (typeof exports !== 'undefined') {
  exports.default = FakeStore;
}