// PROMISE 
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

function cafe (count) {
    console.log("Հարգելի հաճախորդ ձեր պատվերը սպասման մեջ է, խնդրում ենք սպասել");
    addMilk(count)
        .then(data => {
            console.log(data); //error
            return addChocolate(count)
        })
        .then(data => {
            console.log(data);
            return addSugar(count)
        })
        .then(data => {
            console.log(data)
            return barman()
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
        .finally(()=>console.log("Շնորհակալություն մեր ծառայություններից օգտվելու համար"))
}

cafe(10)