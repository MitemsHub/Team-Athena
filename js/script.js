// task 1

//See index page

// task 2

let member = ["Toba", "Mitems", "Shytemi", "Jhena", "Demand", "Emmanuel", "Obums", "Korex"] 
console.log(member[1])

// task 3 

const memberProfile = {
    firstName: "Emmanuel",
    lastName: "Mitti",
    bestMovie: "Miracle in Cell No. 7",
    bestFood: "Porridge Yam",
    state: "Delta State",
    groupName: "Team Athena",
    complexion: "Dark",
    birthMonth: "June 18"
}

console.log("Best Movie is: " + memberProfile.bestMovie)

// task 4 

let noun1 = "Emmanuel Mitti"
let noun2 = "That sharwama"
let noun3 = "Ofure"
let noun4 = " Laptop"
let noun5 = "The street of Maitama"

let verb1 = " looks"
let verb2 = " is"
let verb3 = " loves"
let verb4 = "I bought"
let verb5 = " looks so"

let adjective1 = " charming"
let adjective2 = " tasty"
let adjective3 = " dancing"
let adjective4 = " a new"
let adjective5 = " beautiful"

console.log ("1. " + noun1 + verb1 + adjective1)
console.log ("2. " + noun2 + verb2 + adjective2)
console.log ("3. " + noun3 + verb3 + adjective3)
console.log ("4. " + verb4 + adjective4 + noun4)
console.log ("5. " + noun5 + verb5 + adjective5)

// task 5 

let x = 17
let y = 8

console.log ("The remainder of 17/8 is: " + x%y)

// task 6 

quadraticFormula(2,5,2)

function quadraticFormula(a, b, c) {
    let numerator = b * b - (4 * a * c)
    if (numerator > 0) {
        root1 = (-b + Math.sqrt(numerator) / (2 * a))
        root2 = (-b - Math.sqrt(numerator) / (2 * a))
        console.log(root1, root2)
    }
    else {
        console.log("can't be solved, numerator equals to: "+ numerator)
    }
}

// task 7 

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "That"

console.log(wordBlanks+" "+myAdjective+" "+myNoun+" "+myVerb+" "+ myAdverb)


// task 8 

let pi = 3.142;

areaOfCircle(9)

function areaOfCircle(r) {
    let area = pi*(r*r)
    console.log("The area of this circle is: "+ area)
}

// task 9 

let P = 8200;
let R = 17.5;
let T = 2.5;

simpleInterest(8200, 17.5, 2.5)

function simpleInterest(P, R, T) {
    let SI = (P*R*T)/100
    console.log("The Simple Interest is: "+ SI)
}


// task 10 

modulus(10, 4)

function modulus(a, b){
    let MD = (a%b)
    console.log("The result will be: " + MD)
}

// task 11

let meritWeight1 = 78;
let nutjobWeight1 = 98;

let meritHeight1 = 1.69;
let nutjobHeight1 = 1.95;

let meritWeight2 = 85;
let nutjobWeight2 = 95;

let meritHeight2 = 1.76;
let nutjobHeight2 = 1.88;


function BMI(MW1, NW1, MH1, NH1){
    meritBMI = MW1/MH1**2;
    nutjobBMI = NW1/NH1**2;

    if (meritBMI > nutjobBMI){
        return ("True")
    }
    else {
        return ("False")
    }
}

answer = BMI(meritWeight1, nutjobWeight1, meritHeight1, nutjobHeight1)
console.log(answer)

function BMI(MW2, NW2, MH2, NH2){
    meritBMI = MW2/MH2**2;
    nutjobBMI = NW2/NH2**2;

    if (meritBMI > nutjobBMI){
        return ("True")
    }
    else {
        return ("False")
    }
}


answer = BMI(meritWeight2, nutjobWeight2, meritHeight2, nutjobHeight2)
console.log(answer)

document.getElementById("myTeam").style.backgroundColor = "crimson";