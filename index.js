
// // Will loop through the record
// // Find the first object whhose condition returns true based on a callback
// // basically the format of using the .find() arrray method

// function loopThroughAndFind(result, callbackFunction){
//     let answer = null
//     for(let item of result){
//         if(finder(item) === true){
//             answer = item
//             break
//         }
//     }
//     return answer

// }

// // Will find a given record

// function isWin(record) {
//     return record.result === "W"
// }

// // Using the .find() arrray method

// let superbowlWin = record.find(isWin)
// console.log(superbowlWin)

// // In arrow function notation

// let superbowlWin = record.find(record => record.result === "W")

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin(record){
    const win = record.find(game => game.result === "W")
    if (win === undefined) {
        return undefined
    } else 
    return win.year


}
