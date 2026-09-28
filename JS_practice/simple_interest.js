function simpleInterest(principalAmount, rate, time) {
    return (principalAmount * rate * time) / 100;
}

console.log(simpleInterest(1000, 5, 2));