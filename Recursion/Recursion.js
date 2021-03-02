// Recursion - a function that call itself recursively - good for sorting or tree traversal
let counter = 0;
function recur() {
    //recur(); //stack overflow occurs. Need to set base case or when to stop 
    if(counter > 3) {
        return  'done';
    }
    counter++;
    //recur(); // return undefined when a fn doesnt return anything
    return recur();
}

recur();
//recur(recur(recur(recur('done'))))
// 3 ruls recussion
// 1.Base case (when to stop condition)
//2.Recusive case(until reaching basecase), 3.return for both case. 