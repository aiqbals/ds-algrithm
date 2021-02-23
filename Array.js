// That's why: lookup/ push - O(1) and insert/delete - O(1)
const str = ['a', 'b', 'c', 'd'];
str[2]; //O(1)

str.push('f'); // add last 
str.pop('');//last item - O(1)
str.pop(); 
str.unshift('x'); //add begining - O(n)
str.splice(2,0, 'z') // add middle - O(n)

console.log(str);

//static(fixsize)- a[20] vs dynamic array - list(js) arrraylist(java) - a[] 
//in JS, array is dynamic array
str.append(); // add - instead of push  

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length
    }
    pop(){
      const lstD = this.data[this.length-1];
      delete this.data[this.length-1];
      this.length--;
      return lstD;
    }

    delete(index){
      const item = this.data[index];
      this.shiftItems(index);
    }

    shiftItems(index){
      for(let i = index; i<this.length-1; i++){
        this.data[i] = this.data[i+1]
      }
      delete this.data[this.length-1];
      this.length--;
    }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('by');
newArray.push('cy');
newArray.push('ty');
newArray.push('dy');
console.log(newArray);
newArray.pop();
console.log(newArray);
newArray.delete(1);
console.log(newArray);


//reverse a string -- 
function reverse(str) {
    //alwasy check input so that user put string not number
    if(!str || str.length<2 || typeof str !=='string'){
        return 'not right input provide';
    }

    const backwords = [];
    const len = str.length -1;
    for(let i=len; i>=0; i--) {
        backwords.push(str[i])
    }
    console.log(backwords);
    return backwords.join('');
}
reverse('My name is Asif')

//we can simply use reverse method
function reverse2(str) {
    //alwasy check input so that user put string not number
    if(!str || str.length<2 || typeof str !=='string'){
        return 'not right input provide';
    }
    return str.split('').reverse().join('')
    //converting to array and thn revers and the join(to make string). 
}
reverse2('My name is Asif');
//Or
const reverse3 = str =>  str.split('').reverse().join('');
reverse3('My name is Asif');
//Or
const reverse4 = str =>  [...str].reverse().join('');
reverse4('My name is Asif');

// MergeSortedArrays two sorted array [0,3,4,31][4,6,30] to one sorted array[]
const merge = (array, array2) => {
    const mergetwo = [];
    let arr1 = array[0];
    let arr2 = array2[0];
    let i = 1;
    let j = 1;
    //check
    if(array.length===0) {
        return array2;
    }
    if(array2.length===0) {
        return array;
    }

    //array.push(...array2);
    while(arr1 || arr2) {
      console.log(arr1, arr2);
        if(arr2===undefined || arr1 < arr2) {
            //!arr2 or arr2 === undefined, both results true
            mergetwo.push(arr1)
            arr1 = array[i]
            i++
        } else {
            mergetwo.push(arr2);
            arr2 = array2[j]
            j++
        }
    }
    return mergetwo;
}
merge([0,3,4,31],[4,6,30])
