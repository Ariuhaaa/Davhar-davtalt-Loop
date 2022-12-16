// 9. Өгөгдсөн тооны цифрүүдийн нийлбэрийг олох программ бич
// let x = "12 ", i = 0, uld = 0, sum = 0 , y = x ;
// while(i < y.length){
//     uld = x % 10
//     sum = sum + uld 
//     x = Math.floor(x / 10)
//     i++ 
// }
// console.log(sum);

// let x = "12 ", uld = 0, sum = 0 , y = x;
// for (i = 0 ; i < y.length; i ++){
//     uld = x % 10
//     sum = sum + uld 
//     x = Math.floor(x / 10)
// }
// console.log(sum);

// 1. Давхар давталт 1
// Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
// Input: 5
// Output:
// - 1 
//  - 1 2 
//  - 1 2 3 
//  - 1 2 3 4 
//  - 1 2 3 4 5


let m = 10 , string = " ";
for (i = 0; i < m; i++){
    for(j = 1; j <= i + 1 ; j ++){
        string = string + " " +  j 
    }
    j = 1
    console.log(string);
    string = " "
}

