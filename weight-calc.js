// calculating amount of weighting needed for a diver
// simple and advanced options
// variables: diver weight, diver body type, exposure protection, type of tank, fresh vs salt water

// simple exposure protection calcs:
// Swimsuit/dive skin: .5-2kg/1-4lbs
// 3mm: 5% of your body weight
// 5mm: 10% of your body weight
// 7mm with hood and gloves: 10% of your body weight +1.5-3kg/3-5lbs
// Neoprene drysuit: 10% of your body weight +3-5kg/7-10lbs
// Shell drysuit light undergarment: 10% of your body weight +1.5-3kg/3-5lbs
// Shell drysuit heavy undergarment: 10% of your body weight +3-7kg/7-14lbs

// body type can be affected by height, and testing personal buoyancy

// metric vs imperial
let metric = false;

// amount of weight needed = total positive buoyancy
const weightCalcSimple = (bodyWeight, suitPercent, suitAddon, tank) => {
    let weight = bodyWeight * suitPercent + suitAddon + tank;
    return weight;
};


const weightCalcAdvanced = (bodyWeight, height, suitTotal, bcd, tank) => {
    let personalWeightAdjust = bodyWeight //something something math with height here.  Need to brainstorm
    let weight = personalWeightAdjust + suitTotal + bcd + tank;
    return weight;
};