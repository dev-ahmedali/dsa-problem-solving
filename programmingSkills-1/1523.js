// Count Odd Numbers in an Interval Range

var countOdds = function(low, high) {
    let count = 0;
    if(low%2 == 0) {
        low = low+1;
    }
    if(high%2 == 0) {
        high = high-1;
    }
    count = Math.floor((high-low)/2+1);
    return count
};