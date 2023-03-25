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

let turkeyMince5 = {
    turkeyCalories: 1.41,
    turkeyCarbs: 0.005,
    turkeySalt: 0.0018,
    turkeyProtein: 0.32,
    turkeyPotassium: 2.94
}

let turkeyMince12 = {
    turkeyCalories: 1.40,
    turkeyCarbs: 0.005,
    turkeySalt: 0.0025,
    turkeyProtein: 0.19,
    turkeyPotassium: 2.94
}

let beefMince5 = {
    beefCalories: 1.74,
    beefCarbs: 0.007,
    beefSalt: 0.0026,
    beefProtein: 0.27,
    beefPotassium: 2.18
}

let beefMince12 = {
    beefCalories: 2.33,
    beefCarbs: 0.007,
    beefSalt: 0.0029,
    beefProtein: 0.27,
    beefPotassium: 2.18
}

let chicken = {
    chickenCalories: 1.32,
    chickenCarbs: 0.005,
    chickenSalt: 0.0018,
    chickenProtein: 0.28,
    chickenPotassium: 2.23
}

let egg = {
    eggCalories: 66,
    eggCarbs: 0.5,
    eggSalt: 0.20,
    eggProtein: 6.4,
    eggPotassium: 65
}

let smokedSalmon = {
    smokedSalmonCalories: 1.91,
    smokedSalmonCarbs: 0.005,
    smokedSalmonSalt: 0.009,
    smokedSalmonProtein: 0.24,
    smokedSalmonPotassium: 1.75
}

let bacon = {
    baconCalories: 2.79,
    baconCarbs: 0.010,
    baconSalt: 0.033,
    baconProtein: 0.29,
    baconPotassium: 5.65
}

let tuna = {
    tunaCalories: 1.06,
    tunaCarbs: 0,
    tunaSalt: 0.0056,
    tunaProtein: 0.25,
    tunaPotassium: 2.00
}

let salmon = {
    salmonCalories: 2.32,
    salmonCarbs: 0.005,
    salmonSalt: 0.0023,
    salmonProtein: 0.22,
    salmonPotassium: 3.20
}

let chickenGoujons = {
    chickenGoujonsCalories: 2.57,
    chickenGoujonsCarbs: 0.14,
    chickenGoujonsSalt: 0.0059,
    chickenGoujonsProtein: 0.15,
    chickenGoujonsPotassium: 3.00
}

let fishFingers = {
    fishFingersCalories: 2.17,
    fishFingersCarbs: 0.21,
    fishFingersSalt: 0.0062,
    fishFingersProtein: 0.13,
    fishFingersPotassium: 2.00
}

let noodles = {
    noodlesCalories: 174,
    noodlesCarbs: 34,
    noodlesSalt: 0.90,
    noodlesProtein: 7.2,
    noodlesPotassium: 50
}

let rice = {
    riceCalories: 370,
    riceCarbs: 76,
    riceSalt: 0.08,
    riceProtein: 7.6,
    ricePotassium: 200
}

let potatoes = {
    potatoesCalories: 1.07,
    potatoesCarbs: 0.23,
    potatoesSalt: 0.0001,
    potatoesProtein: 0.025,
    potatoesPotassium: 6.00
}

let ovenChips = {
    ovenChipsCalories: 1.43,
    ovenChipsCarbs: 0.21,
    ovenChipsSalt: 0.0019,
    ovenChipsProtein: 0.023,
    ovenChipsPotassium: 5.00
}

let wraps = {
    wrapsCalories: 88,
    wrapsCarbs: 15,
    wrapsSalt: 0.29,
    wrapsProtein: 2.5,
    wrapsPotassium: 33
}

let bagelThin = {
    bagelThinCalories: 130,
    bagelThinCarbs: 25,
    bagelThinSalt: 0.40,
    bagelThinProtein: 5.00,
    bagelThinPotassium: 50
}

let hashBrowns = {
    hashBrownsCalories: 138,
    hashBrownsCarbs: 20,
    hashBrownsSalt: 0.33,
    hashBrownsProtein: 1.90,
    hashBrownsPotassium: 450
}

let breakfastMuffin = {
    breakfastMuffinCalories: 146,
    breakfastMuffinCarbs: 26.9,
    breakfastMuffinSalt: 0.50,
    breakfastMuffinProtein: 5.60,
    breakfastMuffinPotassium: 80
}

let oats = {
    oatsCalories: 3.46,
    oatsCarbs: 0.24,
    oatsSalt: 0.0020,
    oatsProtein: 0.032,
    oatsPotassium: 1.30
}

let squareBar = {
    squareBarCalories: 119,
    squareBarCarbs: 21,
    squareBarSalt: 0.21,
    squareBarProtein: 0.8,
    squareBarPotassium: 30
}

let freddo = {
    freddoCalories: 95,
    freddoCarbs: 10,
    freddoSalt: 0.04,
    freddoProtein: 1.4,
    freddoPotassium: 30
}

let bologneseSauce = {
    bologneseSauceCalories: 0.34,
    bologneseSauceCarbs: 0.062,
    bologneseSauceSalt: 0.0066,
    bologneseSauceProtein: 0.005,
    bologneseSaucePotassium: 1.20
}

let creamOfTartar = {
    creamOfTartarCalories: 12,
    creamOfTartarCarbs: 2.5,
    creamOfTartarSalt: 0.0004,
    creamOfTartarProtein: 0,
    creamOfTartarPotassium: 830
}

let smoothieMix = {
    smoothieMixCalories: 44,
    smoothieMixCarbs: 9.4,
    smoothieMixSalt: 0.01,
    smoothieMixProtein: 0.5,
    smoothieMixPotassium: 200
}

let miniEggBar = {
    miniEggBarCalories: 5.25,
    miniEggBarCarbs: 0.59,
    miniEggBarSalt: 0.0024,
    miniEggBarProtein: 0.068,
    miniEggBarPotassium: 2
}

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
    caloriesTotal += amount * turkeyMince5.turkeyCalories
    carbsTotal += amount * turkeyMince5.turkeyCarbs
    saltTotal += amount * turkeyMince5.turkeySalt
    proteinTotal += amount * turkeyMince5.turkeyProtein
    potassiumTotal += amount * turkeyMince5.turkeyPotassium

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
    caloriesTotal += amount * turkeyMince12.turkeyCalories
    carbsTotal += amount * turkeyMince12.turkeyCarbs
    saltTotal += amount * turkeyMince12.turkeySalt
    proteinTotal += amount * turkeyMince12.turkeyProtein
    potassiumTotal += amount * turkeyMince12.turkeyPotassium

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
    caloriesTotal += amount * beefMince5.beefCalories
    carbsTotal += amount * beefMince5.beefCarbs
    saltTotal += amount * beefMince5.beefSalt
    proteinTotal += amount * beefMince5.beefProtein
    potassiumTotal += amount * beefMince5.beefPotassium

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
    caloriesTotal += amount * beefMince12.beefCalories
    carbsTotal += amount * beefMince12.beefCarbs
    saltTotal += amount * beefMince12.beefSalt
    proteinTotal += amount * beefMince12.beefProtein
    potassiumTotal += amount * beefMince12.beefPotassium

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
    caloriesTotal += amount * chicken.chickenCalories
    carbsTotal += amount * chicken.chickenCarbs
    saltTotal += amount * chicken.chickenSalt
    proteinTotal += amount * chicken.chickenProtein
    potassiumTotal += amount * chicken.chickenPotassium

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
    caloriesTotal += amount * smokedSalmon.smokedSalmonCalories
    carbsTotal += amount * smokedSalmon.smokedSalmonCarbs
    saltTotal += amount * smokedSalmon.smokedSalmonSalt
    proteinTotal += amount * smokedSalmon.smokedSalmonProtein
    potassiumTotal += amount * smokedSalmon.smokedSalmonPotassium

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
    caloriesTotal += amount * bacon.baconCalories
    carbsTotal += amount * bacon.baconCarbs
    saltTotal += amount * bacon.baconSalt
    proteinTotal += amount * bacon.baconProtein
    potassiumTotal += amount * bacon.baconPotassium

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
    caloriesTotal += amount * tuna.tunaCalories
    carbsTotal += amount * tuna.tunaCarbs
    saltTotal += amount * tuna.tunaSalt
    proteinTotal += amount * tuna.tunaProtein
    potassiumTotal += amount * tuna.tunaPotassium

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
    caloriesTotal += amount * salmon.salmonCalories
    carbsTotal += amount * salmon.salmonCarbs
    saltTotal += amount * salmon.salmonSalt
    proteinTotal += amount * salmon.salmonProtein
    potassiumTotal += amount * salmon.salmonPotassium

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
    caloriesTotal += amount * chickenGoujons.chickenGoujonsCalories
    carbsTotal += amount * chickenGoujons.chickenGoujonsCarbs
    saltTotal += amount * chickenGoujons.chickenGoujonsSalt
    proteinTotal += amount * chickenGoujons.chickenGoujonsProtein
    potassiumTotal += amount * chickenGoujons.chickenGoujonsPotassium

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
    caloriesTotal += amount * fishFingers.fishFingersCalories
    carbsTotal += amount * fishFingers.fishFingersCarbs
    saltTotal += amount * fishFingers.fishFingersSalt
    proteinTotal += amount * fishFingers.fishFingersProtein
    potassiumTotal += amount * fishFingers.fishFingersPotassium

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
    caloriesTotal += 1 * noodles.noodlesCalories
    carbsTotal += 1 * noodles.noodlesCarbs
    saltTotal += 1 * noodles.noodlesSalt
    proteinTotal += 1 * noodles.noodlesProtein
    potassiumTotal += 1 * noodles.noodlesPotassium

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
    caloriesTotal += 1 * rice.riceCalories
    carbsTotal += 1 * rice.riceCarbs
    saltTotal += 1 * rice.riceSalt
    proteinTotal += 1 * rice.riceProtein
    potassiumTotal += 1 * rice.ricePotassium

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
    caloriesTotal += amount * potatoes.potatoesCalories
    carbsTotal += amount * potatoes.potatoesCarbs
    saltTotal += amount * potatoes.potatoesSalt
    proteinTotal += amount * potatoes.potatoesProtein
    potassiumTotal += amount * potatoes.potatoesPotassium

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
    caloriesTotal += amount * ovenChips.ovenChipsCalories
    carbsTotal += amount * ovenChips.ovenChipsCarbs
    saltTotal += amount * ovenChips.ovenChipsSalt
    proteinTotal += amount * ovenChips.ovenChipsProtein
    potassiumTotal += amount * ovenChips.ovenChipsPotassium

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
    caloriesTotal += 1 * wraps.wrapsCalories
    carbsTotal += 1 * wraps.wrapsCarbs
    saltTotal += 1 * wraps.wrapsSalt
    proteinTotal += 1 * wraps.wrapsProtein
    potassiumTotal += 1 * wraps.wrapsPotassium

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
    caloriesTotal += 1 * bagelThin.bagelThinCalories
    carbsTotal += 1 * bagelThin.bagelThinCarbs
    saltTotal += 1 * bagelThin.bagelThinSalt
    proteinTotal += 1 * bagelThin.bagelThinProtein
    potassiumTotal += 1 * bagelThin.bagelThinPotassium

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
    caloriesTotal += 1 * hashBrowns.hashBrownsCalories
    carbsTotal += 1 * hashBrowns.hashBrownsCarbs
    saltTotal += 1 * hashBrowns.hashBrownsSalt
    proteinTotal += 1 * hashBrowns.hashBrownsProtein
    potassiumTotal += 1 * hashBrowns.hashBrownsPotassium

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
    caloriesTotal += 1 * breakfastMuffin.breakfastMuffinCalories
    carbsTotal += 1 * breakfastMuffin.breakfastMuffinCarbs
    saltTotal += 1 * breakfastMuffin.breakfastMuffinSalt
    proteinTotal += 1 * breakfastMuffin.breakfastMuffinProtein
    potassiumTotal += 1 * breakfastMuffin.breakfastMuffinPotassium

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
    caloriesTotal += amount * oats.oatsCalories
    carbsTotal += amount * oats.oatsCarbs
    saltTotal += amount * oats.oatsSalt
    proteinTotal += amount * oats.oatsProtein
    potassiumTotal += amount * oats.oatsPotassium

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
    caloriesTotal += 1 * squareBar.squareBarCalories
    carbsTotal += 1 * squareBar.squareBarCarbs
    saltTotal += 1 * squareBar.squareBarSalt
    proteinTotal += 1 * squareBar.squareBarProtein
    potassiumTotal += 1 * squareBar.squareBarPotassium

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
    caloriesTotal += 1 * freddo.freddoCalories
    carbsTotal += 1 * freddo.freddoCarbs
    saltTotal += 1 * freddo.freddoSalt
    proteinTotal += 1 * freddo.freddoProtein
    potassiumTotal += 1 * freddo.freddoPotassium

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
    caloriesTotal += amount * bologneseSauce.bologneseSauceCalories
    carbsTotal += amount * bologneseSauce.bologneseSauceCarbs
    saltTotal += amount * bologneseSauce.bologneseSauceSalt
    proteinTotal += amount * bologneseSauce.bologneseSauceProtein
    potassiumTotal += amount * bologneseSauce.bologneseSaucePotassium

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
    caloriesTotal += 1 * creamOfTartar.creamOfTartarCalories
    carbsTotal += 1 * creamOfTartar.creamOfTartarCarbs
    saltTotal += 1 * creamOfTartar.creamOfTartarSalt
    proteinTotal += 1 * creamOfTartar.creamOfTartarProtein
    potassiumTotal += 1 * creamOfTartar.creamOfTartarPotassium

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
    caloriesTotal += 1 * smoothieMix.smoothieMixCalories
    carbsTotal += 1 * smoothieMix.smoothieMixCarbs
    saltTotal += 1 * smoothieMix.smoothieMixSalt
    proteinTotal += 1 * smoothieMix.smoothieMixProtein
    potassiumTotal += 1 * smoothieMix.smoothieMixPotassium

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
    caloriesTotal += amount * miniEggBar.miniEggBarCalories
    carbsTotal += amount * miniEggBar.miniEggBarCarbs
    saltTotal += amount * miniEggBar.miniEggBarSalt
    proteinTotal += amount * miniEggBar.miniEggBarProtein
    potassiumTotal += amount * miniEggBar.miniEggBarPotassium

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