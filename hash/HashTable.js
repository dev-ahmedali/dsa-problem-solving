class HashTable {
  constructor(size) {
    this.arr = new Array(size).fill([]);
    this.size = size
    console.log(this.arr);
  }
  hashFunction(str) {
    str = str + ''
    let sum = 0;
    for(let i = 0; i < str.length; i++) {
        sum = sum + str.charCodeAt(i)
    }
    let index = sum % this.size
  }
  set(value) {
    let index = this.hashFunction(value);
    this.arr[index].push(value);
  }

  get(value) {
    let index = this.hashFunction(value);
    let resultArr = this.arr[index]
    // linear search
    for(let i = 0; i < resultArr.length; i++) {
        if(resultArr[i] == value) {
            return true;
        }
    }
    return false;
  }
}

let hash = new HashTable(5);

hash.set('apple');
hash.set('banana');
hash.set('orange');
console.log(hash.get('apple'));
console.log(hash.get('jack-fruit'));
