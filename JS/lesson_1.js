let item_1 = 5
// console.log(item_1)
let item_2 = 3
// console.log(item_2)
let item_3 = item_1 + item_2
// console.log(item_3)
let item_4 = "Yolochka"
// console.log(item_3 + item_4)
// console.log(item_3 * item_4)
let item_5 = item_3
// console.log(item_5)
let item_6 = 15
let item_6_type = typeof(item_6)
// console.log("item_6 ==", item_6, "item_6_type ==", item_6_type)
let item_7 = item_6.toString()
let item_7_type = typeof(item_7)
// console.log("Item_7 ==", item_7, "Item_7_type ==", item_7_type)

let morning = false
// console.log(morning, typeof(morning))
let evening = true
// console.log(evening, typeof(evening))

let apples = 15
let cherry = 10

let compare = apples <= cherry
// console.log(compare)
// if (compare){
    // console.log("Compare is", compare)
// } else if (apples == 15) {
    // console.log("Apples ==", apples)
// } else {
    // console.log("!!!Compare is", false)
// }

let age_2 = 18
let age_3 = 60
const div = document.getElementById("d")
const checkAge = function(...age) {
    age.forEach(el => {
        if(el && !isNaN(el)){
            if (el < age_2){
              div.innerHTML += "You don't have access cause your age is " + el + '<br />'
            } else if(el >= age_2 && el <= age_3){
                div.innerHTML += "Welcome!" + '<br />'
            } else if(el > age_3){
                div.innerHTML += "Ceep calm and watch Culture channel" + '<br />'
            }else{
                div.innerHTML += "Technical work." + '<br />'
            }
        }else{
            div.innerHTML += "Wrong input" + '<br />'
        }
    })

}
checkAge(16,18,45,60,65)