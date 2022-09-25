// ASYINC AWAIT 

const { resolve } = require("path");
const db = {
    milk : 40,
    chocolate : 10,
    sugar : 40
}

function addMilk (count) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(db.milk - count >= 0 ) {
                db.milnk -= count;
                return resolve(`Ավելացրեցի ${count} լիտր կաթ`)
            } else {
                reject("Կներեք, բայց պահեստի կաթի քանակը չի բավականացնում")
            }
        }, 1150)
    });
}

function addChocolate(count) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(db.chocolate - count >= 0 ) {
                db.chocolate -= count;
                return resolve(`Ավելացրեցի ${count} լիտր շոկոլադ`)
            } else {
                reject("Կներեք, բայց պահեստի շոկոլադի քանակը չի բավականացնում")
            }
        }, 1800)
    });
}

function addSugar(count) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(db.sugar - count >= 0 ) {
                db.sugar -= count;
                return resolve(`Ավելացրեցի ${count} լիտր շաքարավազ`)
            } else {
                reject("Կներեք, բայց պահեստի շաքարավազի քանակը չի բավականացնում")
            }
        }, 1200)
    });
}

function barman () {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            return resolve(`Ձեր պատվերը պատրաստ է, կարող եք վերցնել`)
        }, 1150);
    })
}

async function cafe (count) {
    console.log("Հարգելի հաճախորդ, Ձեր պատվերը սպասման մեջ է, խնդրում ենք սպասել");
    const a1 = await addMilk(count)
    const a2 = await addChocolate(count)
    const a3 = await addSugar(count)
    const a4 = await barman()

    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);
}
cafe(10)
    .catch(err => console.log(err))
    .finally(() => ("OK"))