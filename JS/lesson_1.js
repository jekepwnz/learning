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

const checkAge = function(age) {
    age = Number(age)
if(typeof age == 'number'){
    if (age < age_2){
      console.log("You don't have access cause your age is " + age)
    } else if(age >= age_2 && age <= age_3){
        console.log("Welcome!")
    } else if(age > age_3){
       console.log("Ceep calm and watch Culture channel")
    }else{
     console.log("Technical work.")
    }
}else{
    console.log("Wrong input")
}
}

checkAge(17)
checkAge(18)
checkAge(61)
checkAge("aaa")
checkAge("20")