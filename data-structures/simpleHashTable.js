class HashNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}


/**
 * Areas for improvement:
 * 
 * 1) Real hashing algo
 * 2) Manage size of item array for memory purposes
 * 3) Hash collision strategy
 */
class HashMap {

  constructor() {
    this._items = [];
  }

  get(key) {

    let i = this._hash(key);
    
    if (!this._items[i])
      return undefined;

    let response;

    this._items[i].forEach(hashNode => {
      if (hashNode.key == key)
        response = hashNode.value;
      
    });
    return response;

  }

  set(hashNode) {
    let i = this._hash(hashNode.key);

    if (!this._items[i])
      this._items[i] = [];

    this._items[i].push(hashNode);
  }

  remove(key) {
    let i = this._hash(key);

    let item = this._items[i];

    if (!item)
      return;

    if (item.length >= 1) {
      item.forEach((el, index, arr) => {
        if (el.key == key)
          item.splice(index, 1);
      })
    }

  }

  /**
   * A really _really_ dumb hashing algo, in reality 
   * would probably not write a custom one of these,
   * this is just for exercise purposes
   * @param {} key 
   */
  _hash(key) {
    let str = key.toString();
    return str.charCodeAt(0)
  }
}


var hashMap = new HashMap();

// Set the values
hashMap.set(new HashNode('a', 1))
hashMap.set(new HashNode('b', 2))

console.log("Val at key 'a':" + hashMap.get('a')); // Should log 1
console.log("Val at key 'b':" + hashMap.get('b')); // Should log 2

hashMap.remove('b'); // Remove a key

console.log("Val at key 'a':" + hashMap.get('a')); // Should still log 1
console.log("Val at key 'b':" + hashMap.get('b')); // Should log undefined