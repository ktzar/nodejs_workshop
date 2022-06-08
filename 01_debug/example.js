function average(...numbers) {
    let acc = "0"
    for (let i = 0; i < numbers.length; i ++) {
       acc += numbers[i] 
    }
    return acc / numbers.length
}

console.log(average(10, 20, 30, 40))
