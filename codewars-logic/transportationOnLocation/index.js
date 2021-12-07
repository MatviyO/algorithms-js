function rentalCarCost(days) {
    const costPerDay = 40;
    const discount = days >= 7 ? 50 : days >= 3 ? 20 : 0

    return days * costPerDay - discount;
}

console.log(rentalCarCost(11))
