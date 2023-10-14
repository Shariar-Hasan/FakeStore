class FakeStore {
  constructor(dbname) {
    this.dbname = dbname;
    if (!localStorage.getItem(dbname)) {
      localStorage.setItem(dbname, JSON.stringify([]));
    }
  }
  get(key) {
    try {
      if (key) {
        let items = JSON.parse(localStorage.getItem(this.dbname));
        return items.filter((item) => item[`fs_id`] == key);
      } else {
        return JSON.parse(localStorage.getItem(this.dbname));
      }
    } catch (err) {
      console.error(err);
    }
  }
  push(item, key) {
    try {
      let items = this.get();
      if (!item) {
        item = key;
        key = this.createUID();
      }
      item.fs_id = key;
      const exist = items?.find((it) => it.fs_id === key);
      if (exist) {
        throw new Error("Key already Exist");
      }
      items.push(item);
      localStorage.setItem(this.dbname, JSON.stringify(items));
      return this.get;
    } catch (err) {
      console.error(err);
    }
  }
  update(key, item) {
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
        return this.get(key);
      }
    }
  }
  remove(key) {
    let items = this.get();
    if (key) {
      const restOfTheItems = items.filter((item) => item.fs_id !== key);
      localStorage.setItem(this.dbname, JSON.stringify(restOfTheItems));
    } else {
      localStorage.setItem(this.dbname, JSON.stringify([]));
    }
  }
  clear() {
    localStorage.removeItem(this.dbname);
  }
  createUID(option = {}) {
    let { start = "", end = "" } = option;
    let id = "" + new Date().getTime();
    start += "";
    end += "";
    return start + id + end;
  }
}
export default FakeStore;
