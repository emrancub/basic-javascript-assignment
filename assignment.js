// First Problem
function kilometerToMeter(kiloMeter) {
    let meter = kiloMeter * 1000;
    return meter;
}
const convert = kilometerToMeter(3);
console.log(convert);

// Second Problem
function budgetCalculator(watch, phone, laptop) {
    let watchPrice = watch * 50;
    let phonePrice = phone * 100;
    let laptopPrice = laptop * 500;
    let totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}
const price = budgetCalculator(2, 5, 2);
console.log(price);

// Third Problem
function hotelCost(days) {
    let cost = 0;
    if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        let firstTenDays = 10 * 100;
        let reminingDays = days - 10;
        let secondLeftDays = reminingDays * 80;
        cost = firstTenDays + secondLeftDays;
    }
    else {
        let firstTenDays = 10 * 100;
        let secondTenDays = 10 * 80;
        let reminingDays = days - 20;
        let thirdLeftDays = reminingDays * 50;
        cost = firstTenDays + secondTenDays + thirdLeftDays;
    }
    return cost;
}
const totalCost = hotelCost(21);
console.log(totalCost);

// Fouth Program
function megaFriend(name) {
    let names = ['emran hasan', 'hasann', 'md', 'hira', 'saiful sajon', 'hridoy'];
    let maxValue = names[0];
    for (let i = 0; i <= names.length; i++) {
        let element = names[i];
        if (maxValue < element) {
            maxValue = element;
        }
    }
    return maxValue;
}
console.log(megaFriend());