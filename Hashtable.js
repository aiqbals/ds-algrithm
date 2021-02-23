let user = {
    age: 54,
    name: 'Aydin',
    scream: function() {
        console.log('This is Aydin')
    }
}

//user.age; // O(1)
//user.scream; // lookups - O(1) 
user.lastname = 'Hoque'; // insert - O(1)
user;

//ES6 - Map() and Sets()
const a = new Map(); 
// any datatype as key(maintain insersion order). In Object, key is stroed as string and no order. 
const b = new Sets();
//similer to map except, it only store keys not values 

//problem - collision - O(n/K) and by removing const, its O(n) - k is the size of hashtable 
//Two common ways to deal with collision are: Linklist and e.g., open address ,, see google

// Building hashtable- using array
class HashTable {
    constructor(size) {
        this.data = new Array(size) // another way to instantiate an array
    }

    _hash(key) {
        let hash = 0;
        for(let i=0; i<key.length; i++) { 
            hash = (hash + key.charCodeAt() * i) %
            this.data.length
        }
        return hash;
    } //O(1)
    //_hash -'_' here is used to make it private property - JS syntax

    set(key, value) {
        const keyindex = this._hash(key);
        if(!this.data[keyindex]) {
            this.data[keyindex] = [];
        } 
        this.data[keyindex].push([key, value])
        //if(!this.data[keyindex]) - to avoid collision
    } //O(1)
    
    get(key) {
        const keyindex = -Hash(key);
        const keyval = this.data[keyindex];
        //if we have 2 memory space instead of 50 and items are in the same array
        if(keyval) {
            for(let i=0; i<keyval.length; i++) {
                if(keyval[i][0] === key) {
                    return keyval[i][1]
                }
            }
        } 
        return undefined
    } // if no collision, O(1), sonst O(n) with very bad hash fn and memory space

    keys() {
        const keysArr = [];
        for(let i=0; i<this.data.length; i++) {
            if(this.data[i]) {
                console.log(this.data[i][0][0])
                keysArr.push(this.data[i][0][0]); 
                // we are array inside array, to remove one, use the first [0]
            }
        }
        return keysArr
    }
}


const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000); 
myHashTable.set('apples', 544); 
myHashTable.set('oranges', 53); 
myHashTable.keys(); // iterate through every key in the array
// set the array using graps as the first index and value using set fn 
myHashTable.get('grapes'); 
// get the value using get fn using graphs index
myHashTable._hash('graphs'); // genereat hash for the grapes key

//interview Q - google - find out the first recurring no otherwise undefined 
const array = (arr) => {
    const len = arr.length;
    if(!arr) {
        return undefined;
    }

    for( let i = 0; i < len; i++ ){
        for(let j =i+1; j < len; j++) {
            if(arr[i] === arr[j]) {
                return arr[i]
            }
        }
    }
    return undefined
} // O(n*n) and spacecomplx O(1)
array([1,4,3,5,1,2,3]);

const array2 = (input) => {
    let map = {};
    for(let i = 0; i < input.length; i++) {
      //console.log(map[input[i]]);
        if(map[input[i]] !== undefined) { 
        //when map[input[i]] = 0, means if(0) gives false. Hence, map[input[i]] !== undefined
            return input[i]
        } else {
            //map[input[i]] = input[i]
            map[input[i]] = i //asgning value (i) to obj properties
            //{1: 0, 4: 1, 3: 2}
        }
        console.log(map);
    }
    return undefined;
}

array2([1,4,3,3,5,4,2,3]);
// faster with hash table - O(n), but with increasing memory be creating object - spaceComplx

