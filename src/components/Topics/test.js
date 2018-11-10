let arr = [1,2,3,4,9,8,7,6]

evensAndOdds = (value) => {
    console.log("Even and Odds was called!")
    let even = [];
    let odd = [];
    for(let i=0; i<value.length; i++) {
        if(value[i] % 2 === 0) {
            even.push(value[i]);
        } else {
            odd.push(value[i]);
        }
    console.log("should be full", even)
    }
    console.log("should be : ", even, "should be: ", odd)
}

console.log(evensAndOdds(arr));