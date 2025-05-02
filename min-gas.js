//base default calculations all in metric, if user wants imperial units, convert after calcs done
let metric = true;

//basic variables for calculations that user can change in interface
let tankSize;
let depthInit;
let scr = 21.25;

const recBasic = () => {
    //enough gas to get two divers to the surface while gas sharing
    let twoDivers = scr * 2;

    //timings
    let safetyStopTime = 3;
    let ascentTime = depthInit / 3 - 1;
    let totalTime = ascentTime + safetyStopTime;
    
    //pressure at depth and rough average
    let maxAta = depthInit / 10 + 1;
    let avgAta = maxAta + 1 / 2;

    //calculate volume needed
    let gasVolume = twoDivers * totalTime * avgAta;

    //convert to pressure
    // need to add in rounding to nearest 10 bar or 100psi
    if (metric === false) {
        return gasVolume / tankSize * 28.3;
    } else {
        return gasVolume / tankSize;
    };
}   