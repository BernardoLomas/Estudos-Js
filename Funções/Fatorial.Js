function Fatorial (num1) {
    let fat = 1;

    for(let i = 1; i <= num1; i++)
    {
        fat *= i;
    }
    return fat;
}

console.log(Fatorial(5));
