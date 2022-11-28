
let arr = [2, 3, 4, 7, 11];
let target = 5;

let n = 1;
let i = 0;
let missingArr = [];

while(true) {
    if(n == arr[i]) {
        i++;
        n++;
    } else {
        missingArr.push(n)
        n++;

        if(missingArr.length > target) {
            break;
        }
    }
}

console.log(missingArr)
console.log(missingArr[target-1])