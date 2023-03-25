function weightFunc () {
    // Checkboxes 
    let inputKurt = document.getElementById('inputKurt')
    let inputGrace = document.getElementById('inputGrace')
    // Inputs 
    let inputCalories = document.getElementById('inputCalories').value;
    let inputSteps = document.getElementById('inputSteps').value;
    let inputGym = document.getElementById('inputGym').value;
    // Button 
    let submitWeight = document.getElementById('submitWeight')
    // Div 
    let resultDiv = document.getElementById('resultDiv')
    let warningDiv1 = document.getElementById('warningDiv1')
    let warningDiv2 = document.getElementById('warningDiv2')
    let kurttdee = 2043
    let gracetdee = 1820
    let kurtTotal
    let graceTotal
    let pound = 3500
    let percentage = 100;

    !inputKurt.checked && !inputGrace.checked ? warningDiv1.innerText = "You need to select an option" : warningDiv1.innerText = " ";
    
    if (inputCalories.length===0||inputSteps.length===0||inputGym.length===0) {
        warningDiv2.style.color = "red"
        warningDiv2.innerText = "Enter all options"
        return
    } else {
        warningDiv2.innerText = " "
    }
    if (inputKurt.checked) {
        kurtTotal = kurttdee - inputCalories + inputSteps / 20 + inputGym * 5
        poundTotal = kurtTotal / pound * 100
        percentageResult = percentage / poundTotal
    } else if (inputGrace.checked) {
        graceTotal = gracetdee - inputCalories + inputSteps / 20 + inputGym * 5
        poundTotal = graceTotal / pound * 100
        percentageResult = percentage / poundTotal
    }

    if (inputKurt.checked && kurtTotal < 0) {
        resultDiv.style.color = "green"
        resultDiv.innerHTML = Math.abs(kurtTotal) + " CALORIES ADDED | " + Math.abs(poundTotal.toFixed(1)) + "% POUND GAINED | " + " " + Math.abs(Math.round(percentageResult)) + " DAYS TO GAIN A POUND <br> 🎉"
    } else if (inputKurt.checked && kurtTotal > 0){
        resultDiv.style.color = "red"
        resultDiv.innerHTML = Math.abs(kurtTotal) + " CALORIES LOST | " + Math.abs(poundTotal.toFixed(1)) + "% POUND LOST | " + " " + Math.abs(Math.round(percentageResult)) + " DAYS TO LOSE A POUND <br> ⛔"
    }

    if (inputGrace.checked && graceTotal < 0) {
        resultDiv.style.color = "red"
        resultDiv.innerHTML = Math.abs(graceTotal) + " CALORIES ADDED | " + Math.abs(poundTotal.toFixed(1)) + "% POUND GAINED | " + " " + Math.abs(Math.round(percentageResult)) + " DAYS TO GAIN A POUND <br> 🐷"
    } else if (inputGrace.checked && graceTotal > 0){
        resultDiv.style.color = "green"
        resultDiv.innerHTML = Math.abs(graceTotal) + " CALORIES LOST | " + Math.abs(poundTotal.toFixed(1)) + "% POUND LOST | " + " " + Math.abs(Math.round(percentageResult)) + " DAYS TO LOSE A POUND <br> 🎉"
    }
}

function onChanged () {
    let inputKurt = document.getElementById('inputKurt')
    let inputGrace = document.getElementById('inputGrace')
    let warningDiv1 = document.getElementById('warningDiv1')
    inputKurt.checked || inputGrace.checked ? warningDiv1.innerText = " " : warningDiv1.innerText = "You need to select one"
}

const foodItems = [
turkeyMince5 = {
    calories: 1.41,
    carbs: 0.005,
    salt: 0.0018,
    protein: 0.32,
    potassium: 2.94
},
turkeyMince12 = {
    calories: 1.40,
    carbs: 0.005,
    salt: 0.0025,
    protein: 0.19,
    potassium: 2.94
},
beefMince5 = {
    calories: 1.74,
    carbs: 0.007,
    salt: 0.0026,
    protein: 0.27,
    potassium: 2.18
},
beefMince12 = {
    calories: 2.33,
    carbs: 0.007,
    salt: 0.0029,
    protein: 0.27,
    potassium: 2.18
},
chicken = {
    calories: 1.32,
    carbs: 0.005,
    salt: 0.0018,
    protein: 0.28,
    potassium: 2.23
},
egg = {
    eggCalories: 66,
    eggCarbs: 0.5,
    eggSalt: 0.20,
    eggProtein: 6.4,
    eggPotassium: 65
},
smokedSalmon = {
    calories: 1.91,
    carbs: 0.005,
    salt: 0.009,
    protein: 0.24,
    potassium: 1.75
},
bacon = {
    calories: 2.79,
    carbs: 0.010,
    salt: 0.033,
    protein: 0.29,
    potassium: 5.65
},
tuna = {
    calories: 1.06,
    carbs: 0,
    salt: 0.0056,
    protein: 0.25,
    potassium: 2.00
},
salmon = {
    calories: 2.32,
    carbs: 0.005,
    salt: 0.0023,
    protein: 0.22,
    potassium: 3.20
},
chickenGoujons = {
    calories: 2.57,
    carbs: 0.14,
    salt: 0.0059,
    protein: 0.15,
    potassium: 3.00
},
fishFingers = {
    calories: 2.17,
    carbs: 0.21,
    salt: 0.0062,
    protein: 0.13,
    potassium: 2.00
},
noodles = {
    calories: 174,
    carbs: 34,
    salt: 0.90,
    protein: 7.2,
    potassium: 50
},
rice = {
    calories: 370,
    carbs: 76,
    salt: 0.08,
    protein: 7.6,
    potassium: 200
},
potatoes = {
    calories: 1.07,
    carbs: 0.23,
    salt: 0.0001,
    protein: 0.025,
    potassium: 6.00
},
ovenChips = {
    calories: 1.43,
    carbs: 0.21,
    salt: 0.0019,
    protein: 0.023,
    potassium: 5.00
},
wraps = {
    calories: 88,
    carbs: 15,
    salt: 0.29,
    protein: 2.5,
    potassium: 33
},
bagelThin = {
    calories: 130,
    carbs: 25,
    salt: 0.40,
    protein: 5.00,
    potassium: 50
},
hashBrowns = {
    calories: 138,
    carbs: 20,
    salt: 0.33,
    protein: 1.90,
    potassium: 450
},
breakfastMuffin = {
    calories: 146,
    carbs: 26.9,
    salt: 0.50,
    protein: 5.60,
    potassium: 80
},
oats = {
    calories: 3.46,
    carbs: 0.24,
    salt: 0.0020,
    protein: 0.032,
    potassium: 1.30
},
squareBar = {
    calories: 119,
    carbs: 21,
    salt: 0.21,
    protein: 0.8,
    potassium: 30
},
freddo = {
    calories: 95,
    carbs: 10,
    salt: 0.04,
    protein: 1.4,
    potassium: 30
},
bologneseSauce = {
    calories: 0.34,
    carbs: 0.062,
    salt: 0.0066,
    protein: 0.005,
    potassium: 1.20
},
creamOfTartar = {
    calories: 12,
    carbs: 2.5,
    salt: 0.0004,
    protein: 0,
    potassium: 830
},
smoothieMix = {
    calories: 44,
    carbs: 9.4,
    salt: 0.01,
    protein: 0.5,
    potassium: 200
},
miniEggBar = {
    calories: 5.25,
    carbs: 0.59,
    salt: 0.0024,
    protein: 0.068,
    potassium: 2
}
] 

let caloriesTotal = 0;
let carbsTotal = 0;
let saltTotal = 0;
let proteinTotal = 0;
let potassiumTotal = 0;
let waterAmount = 0;

let inputMacroWarnings = document.getElementById('inputMacroWarnings')
let inputMacroResult = document.getElementById('inputMacroResult')
let inputMacroWater = document.getElementById('inputMacroWater')

document.getElementById('turkeyMince5').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    caloriesTotal += amount * turkeyMince5.calories
    carbsTotal += amount * turkeyMince5.carbs
    saltTotal += amount * turkeyMince5.salt
    proteinTotal += amount * turkeyMince5.protein
    potassiumTotal += amount * turkeyMince5.potassium

    if (!amount) {
        inputMacroResult.style.color = "red"
        inputMacroResult.innerText = "You need to select an amount"
        return
    }

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    
    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('turkeyMince12').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    caloriesTotal += amount * turkeyMince12.calories
    carbsTotal += amount * turkeyMince12.carbs
    saltTotal += amount * turkeyMince12.salt
    proteinTotal += amount * turkeyMince12.protein
    potassiumTotal += amount * turkeyMince12.potassium

    if (!amount) {
        inputMacroResult.style.color = "red"
        inputMacroResult.innerText = "You need to select an amount"
        return
    }

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('beefMince5').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    caloriesTotal += amount * beefMince5.calories
    carbsTotal += amount * beefMince5.carbs
    saltTotal += amount * beefMince5.salt
    proteinTotal += amount * beefMince5.protein
    potassiumTotal += amount * beefMince5.potassium

    if (!amount) {
        inputMacroResult.style.color = "red"
        inputMacroResult.innerText = "You need to select an amount"
        return
    }

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('beefMince12').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    caloriesTotal += amount * beefMince12.calories
    carbsTotal += amount * beefMince12.carbs
    saltTotal += amount * beefMince12.salt
    proteinTotal += amount * beefMince12.protein
    potassiumTotal += amount * beefMince12.potassium

    if (!amount) {
        inputMacroResult.style.color = "red"
        inputMacroResult.innerText = "You need to select an amount"
        return
    }

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('chicken').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    caloriesTotal += amount * chicken.calories
    carbsTotal += amount * chicken.carbs
    saltTotal += amount * chicken.salt
    proteinTotal += amount * chicken.protein
    potassiumTotal += amount * chicken.potassium

    if (!amount) {
        inputMacroResult.style.color = "red"
        inputMacroResult.innerText = "You need to select an amount"
        return
    }

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('egg').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    caloriesTotal += 1 * egg.eggCalories
    carbsTotal += 1 * egg.eggCarbs
    saltTotal += 1 * egg.eggSalt
    proteinTotal += 1 * egg.eggProtein
    potassiumTotal += 1 * egg.eggPotassium

    
    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('smokedSalmon').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    caloriesTotal += amount * smokedSalmon.calories
    carbsTotal += amount * smokedSalmon.carbs
    saltTotal += amount * smokedSalmon.salt
    proteinTotal += amount * smokedSalmon.protein
    potassiumTotal += amount * smokedSalmon.potassium

    if (!amount) {
        inputMacroResult.style.color = "red"
        inputMacroResult.innerText = "You need to select an amount"
        return
    }

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('bacon').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    caloriesTotal += amount * bacon.calories
    carbsTotal += amount * bacon.carbs
    saltTotal += amount * bacon.salt
    proteinTotal += amount * bacon.protein
    potassiumTotal += amount * bacon.potassium

    if (!amount) {
        inputMacroResult.style.color = "red"
        inputMacroResult.innerText = "You need to select an amount"
        return
    }

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('tuna').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    caloriesTotal += amount * tuna.calories
    carbsTotal += amount * tuna.carbs
    saltTotal += amount * tuna.salt
    proteinTotal += amount * tuna.protein
    potassiumTotal += amount * tuna.potassium

    if (!amount) {
        inputMacroResult.style.color = "red"
        inputMacroResult.innerText = "You need to select an amount"
        return
    }

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('salmon').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    caloriesTotal += amount * salmon.calories
    carbsTotal += amount * salmon.carbs
    saltTotal += amount * salmon.salt
    proteinTotal += amount * salmon.protein
    potassiumTotal += amount * salmon.potassium

    if (!amount) {
        inputMacroResult.style.color = "red"
        inputMacroResult.innerText = "You need to select an amount"
        return
    }

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('chickenGoujons').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    caloriesTotal += amount * chickenGoujons.calories
    carbsTotal += amount * chickenGoujons.carbs
    saltTotal += amount * chickenGoujons.salt
    proteinTotal += amount * chickenGoujons.protein
    potassiumTotal += amount * chickenGoujons.potassium

    if (!amount) {
        inputMacroResult.style.color = "red"
        inputMacroResult.innerText = "You need to select an amount"
        return
    }

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('fishFingers').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    caloriesTotal += amount * fishFingers.calories
    carbsTotal += amount * fishFingers.carbs
    saltTotal += amount * fishFingers.salt
    proteinTotal += amount * fishFingers.protein
    potassiumTotal += amount * fishFingers.potassium

    if (!amount) {
        inputMacroResult.style.color = "red"
        inputMacroResult.innerText = "You need to select an amount"
        return
    }

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('noodles').onclick = function () {
    caloriesTotal += 1 * noodles.calories
    carbsTotal += 1 * noodles.carbs
    saltTotal += 1 * noodles.salt
    proteinTotal += 1 * noodles.protein
    potassiumTotal += 1 * noodles.potassium

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('rice').onclick = function () {
    caloriesTotal += 1 * rice.calories
    carbsTotal += 1 * rice.carbs
    saltTotal += 1 * rice.salt
    proteinTotal += 1 * rice.protein
    potassiumTotal += 1 * rice.potassium

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('potatoes').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    caloriesTotal += amount * potatoes.calories
    carbsTotal += amount * potatoes.carbs
    saltTotal += amount * potatoes.salt
    proteinTotal += amount * potatoes.protein
    potassiumTotal += amount * potatoes.potassium

    if (!amount) {
        inputMacroResult.style.color = "red"
        inputMacroResult.innerText = "You need to select an amount"
        return
    }

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('ovenChips').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    caloriesTotal += amount * ovenChips.calories
    carbsTotal += amount * ovenChips.carbs
    saltTotal += amount * ovenChips.salt
    proteinTotal += amount * ovenChips.protein
    potassiumTotal += amount * ovenChips.potassium

    if (!amount) {
        inputMacroResult.style.color = "red"
        inputMacroResult.innerText = "You need to select an amount"
        return
    }

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('wraps').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    caloriesTotal += 1 * wraps.calories
    carbsTotal += 1 * wraps.carbs
    saltTotal += 1 * wraps.salt
    proteinTotal += 1 * wraps.protein
    potassiumTotal += 1 * wraps.potassium

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('bagelThin').onclick = function () {
    caloriesTotal += 1 * bagelThin.calories
    carbsTotal += 1 * bagelThin.carbs
    saltTotal += 1 * bagelThin.salt
    proteinTotal += 1 * bagelThin.protein
    potassiumTotal += 1 * bagelThin.potassium

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('hashBrowns').onclick = function () {
    caloriesTotal += 1 * hashBrowns.calories
    carbsTotal += 1 * hashBrowns.carbs
    saltTotal += 1 * hashBrowns.salt
    proteinTotal += 1 * hashBrowns.protein
    potassiumTotal += 1 * hashBrowns.potassium

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('breakfastMuffin').onclick = function () {
    caloriesTotal += 1 * breakfastMuffin.calories
    carbsTotal += 1 * breakfastMuffin.carbs
    saltTotal += 1 * breakfastMuffin.salt
    proteinTotal += 1 * breakfastMuffin.protein
    potassiumTotal += 1 * breakfastMuffin.potassium

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('oats').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    caloriesTotal += amount * oats.calories
    carbsTotal += amount * oats.carbs
    saltTotal += amount * oats.salt
    proteinTotal += amount * oats.protein
    potassiumTotal += amount * oats.potassium

    if (!amount) {
        inputMacroResult.style.color = "red"
        inputMacroResult.innerText = "You need to select an amount"
        return
    }

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('squareBar').onclick = function () {
    caloriesTotal += 1 * squareBar.calories
    carbsTotal += 1 * squareBar.carbs
    saltTotal += 1 * squareBar.salt
    proteinTotal += 1 * squareBar.protein
    potassiumTotal += 1 * squareBar.potassium

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('freddo').onclick = function () {
    caloriesTotal += 1 * freddo.calories
    carbsTotal += 1 * freddo.carbs
    saltTotal += 1 * freddo.salt
    proteinTotal += 1 * freddo.protein
    potassiumTotal += 1 * freddo.potassium

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('bologneseSauce').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    caloriesTotal += amount * bologneseSauce.calories
    carbsTotal += amount * bologneseSauce.carbs
    saltTotal += amount * bologneseSauce.salt
    proteinTotal += amount * bologneseSauce.protein
    potassiumTotal += amount * bologneseSauce.potassium

    if (!amount) {
        inputMacroResult.style.color = "red"
        inputMacroResult.innerText = "You need to select an amount"
        return
    }

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('creamOfTartar').onclick = function () {
    caloriesTotal += 1 * creamOfTartar.calories
    carbsTotal += 1 * creamOfTartar.carbs
    saltTotal += 1 * creamOfTartar.salt
    proteinTotal += 1 * creamOfTartar.protein
    potassiumTotal += 1 * creamOfTartar.potassium

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('smoothieMix').onclick = function () {
    caloriesTotal += 1 * smoothieMix.calories
    carbsTotal += 1 * smoothieMix.carbs
    saltTotal += 1 * smoothieMix.salt
    proteinTotal += 1 * smoothieMix.protein
    potassiumTotal += 1 * smoothieMix.potassium

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 

document.getElementById('miniEggBar').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    caloriesTotal += amount * miniEggBar.calories
    carbsTotal += amount * miniEggBar.carbs
    saltTotal += amount * miniEggBar.salt
    proteinTotal += amount * miniEggBar.protein
    potassiumTotal += amount * miniEggBar.potassium

    if (!amount) {
        inputMacroResult.style.color = "red"
        inputMacroResult.innerText = "You need to select an amount"
        return
    }

    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"

    let sodium = saltTotal / 2.5 * 1000
    let potassiumRatio = potassiumTotal / sodium

    if (potassiumRatio >= 2.5) {
        inputMacroSodium.style.color = "green"
    } else if (potassiumRatio <= 1.5) {
        inputMacroSodium.style.color = "red"
    }

    document.getElementById('inputMacroSodium').innerText = sodium.toFixed(0) + "mg Sodium | " + "Ratio: " + potassiumRatio.toFixed(2)
} 


document.getElementById('water').onclick = function () {
    let amount = document.getElementById('inputMacro').value;
    waterAmount += amount * 1
    inputMacroResult.style.color = "inherit"
    inputMacroResult.innerText = caloriesTotal.toFixed(0) + " Calories | " + carbsTotal.toFixed(0) + "g Carbs | " + proteinTotal.toFixed(0) + "g Protein | " + saltTotal.toFixed(2) + "g Salt | " + potassiumTotal.toFixed(0) + "mg Potassium"
    inputMacroResult.innerText = waterAmount + "ml" + " Water"
}