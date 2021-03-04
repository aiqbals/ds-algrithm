const letters = ['a','d','e','c','z']
letters.sort();
// depending on input size, we have use use custom sorting method, not like .sort()

const basket = [2, 65, 34, 2, 1, 7, 8];
//basket.sort() // check what is the output. 
basket.sort(function (a, b) {
    return a - b;
}) // to solve this
//array elm r converted to strings,thn sorted according to each character's Unicode code point value e.g., 7 = 55
// it is implementation dependent e.g., for chrome v8 is diff from firefox sorting implementation
// all this rules are defined by the js governing board ES / EcmaScript

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]


const a = 'réservé'; // with accents, lowercase
const b = 'RESERVE'; // no accents, uppercase

console.log(a.localeCompare(b));
// expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// expected output: 0