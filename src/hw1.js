// 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı 
//    için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )

// Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)

// 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

// 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.


//1- cevap 

function findPrime(...numbers) {
    
    let counter = 0;

    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] < 2){
            console.log(numbers[i] + " asal olmayan bir sayidir")
        } else if(numbers[i] == 2){
            console.log(numbers[i] + " asal bir sayidir")
        }
        else{
            for (let j = 2; j < numbers[i]; j++) {
                counter = numbers[i] % j;
                if(counter == 0){
                    break;
                }
            }

            if (counter > 0){
                console.log(numbers[i] + " asaldir")
            }else{
                console.log(numbers[i] + " asal degildir.")
            }
        }       
    }
}

//findPrime(1,3,5,8,7)

//2- cevap

function findFriends(x, y) {
    let number1 = 0
    let number2 = 0

    for (let i = 0; i < x; i++) {
        if(x % i == 0){
            number1 += i
        }        
    }

    for (let j= 0; j < y; j++) {
        if(y % j == 0){
            number2 += j
        }
    }

    if(number1 == y && number2 ==x ){
        console.log("Numbers are friends")
    }else{
        console.log("Numbers are not friends")
    }
}

//findFriends(220,284)

//ekstra 3 uncu sorunun function versiyonu

function findPerfectNumber(number) {
    
    let numCounter = 0
    for (let i = 0; i < number; i++) {
        if(number % i == 0){
            numCounter += i
        }
    }
    if(numCounter==number){
        console.log(number + " mukemmel sayidir")
    }
    else
        console.log(number + " mukemmel falan degil")
}


//findPerfectNumber(496)


//3- cevabi

// let counter = 0

// for (let i = 1; i < 1000; i++) {
    
//     for (let j = 1; j < i; j++) {
//         if(i % j == 0){
//             counter += j
//         }
//     }
//     if(counter==i){
//         console.log(i + " mukemmel sayi")
//     }
//     counter = 0
    
// }


//4- cevap

let counter = 0
for (let i = 2; i < 1000; i++) {
    for (let j = 2; j < i; j++) {
        counter = i % j;
        if (counter == 0){
        break
    }
}

if(counter > 0){
    console.log(i + " asal sayi.")
}
}
