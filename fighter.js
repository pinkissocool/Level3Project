// function showNumbers(limit){
//     let even = true;
//     for (let i = 0; i <= limit; i++){
//         if (even == true){
//             console.log("EVEN");
//             even = false;
//         }
//         else {
//             console.log("ODD");
//             even = true;
//         }
//     }
// }

// function showNumbers(limit){
//     for (let i = 0; i <= limit; i++){
//         console.log(i % 2 == 0 ? "EVEN" : "ODD");
//     }
// }

// showNumbers(10);

const array = [0,null, undefined, '', NaN, 10, 5, 11];
console.log(countTruthy(array));

function countTruthy(array){
    for (let element of array){
        if (element){
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
    //Used this one cause for of is better to iterate over elemtns
}