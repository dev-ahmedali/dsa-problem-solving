

function partition(arr, l, r){
    let pivot = arr[l];
    let count = 0;
    for(let i=l; i<= r; i++){
        if(arr[i] < pivot){
            count++;
        }
    }
}

function quickSort(arr, l, r){
    if(l<r){
        let p = partition(arr, l, r);

        // quickSort(arr, l, p-1)
        // quickSort(arr, p+1, r)
    }
}

let arr = [8, 7, 6, 1, 0, 9, 2];
quickSort(arr, 0, arr.length-1)