// let number = +prompt("Enter any number");

// if (number % 2 === 0) {
//     console.log("This number is even")
// } else if(number % 2 === 1) {
//     console.log("This number is odd")
// }



let monthNumber = +prompt("Enter the number of month");
let season = ['Winter', 'Spring', 'Summer', 'Autumn'];

if (monthNumber < 3) {
    console.log(season[0])
} else if(monthNumber > 2 && monthNumber < 6 ) {
    console.log(season[1])
} else if(monthNumber > 5 && monthNumber < 9 ) {
    console.log(season[2])
} else if(monthNumber > 8 && monthNumber < 12 ) {
    console.log(season[3])
} else {
    console.log('Wrong number')
}


// let dayNumber = +prompt("Enter the number of month");

// switch (dayNumber) {
//     case 1:
//         console.log('Monday')
//         break
//         case 2:
//             console.log('Tuesday')
//             break
//             case 3:
//                 console.log('Wednesday')
//                 break
//                 case 4:
//                 console.log('Thursday')
//                 break
//                 case 5:
//                 console.log('Friday')
//                 break
//                 case 3:
//                 console.log('Saturday')
//                 break
//                 case 3:
//                 console.log('Sunday')
//                 break
//                 default:
//                     console.log('Wrong day number')
// }


// let hours = +prompt('What time is it?')

// if (hours > 6 && hours < 12) {
//     console.log('Good norning!')
// } else if (hours > 12 && hours < 18) {
//     console.log('Good afternoon!')
// } else if (hours > 18 && hours <= 23) {
//     console.log('Good evening!')
// } else if (hours > 0 && hours < 6) {
//     console.log('Good night!')
// } else {
//     console.log('Time is not correct!')
// }

