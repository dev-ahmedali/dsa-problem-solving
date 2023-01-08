function countdown(number) {

    console.log(number);
    const newNumber = number - 1
    // base case 
    if(number > 0) {
        countdown(newNumber)
    }
}

countdown(4)