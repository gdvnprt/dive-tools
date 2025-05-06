//base default calculations all in metric, if user wants imperial units, convert after calcs done
let metric = true;

let scr = 21.25;

const recBasic = (tankSize, depthInit) => {
    //enough gas to get two divers to the surface while gas sharing
    let twoDivers = scr * 2;

    //timings
    //need to add if/then for gue style ascent
    let safetyStopTime = 3;
    let ascentTime = depthInit / 3 - 1;
    let totalTime = ascentTime + safetyStopTime;
    
    //pressure at depth and rough average
    let maxAta = depthInit / 10 + 1;
    let avgAta = maxAta + 1 / 2;

    //calculate volume needed
    let gasVolume = twoDivers * totalTime * avgAta;

    //convert to pressure
    let pressure = gasVolume / tankSize;
    
    if (metric === false) {
        if (pressure < 40) {
            return 500;
        } else {
            return Math.ceil((pressure * 14.5) / 100) * 100;
        };
    } else {
        if (pressure < 40) {
            return 40;
        } else{
            return Math.ceil(pressure / 10) * 10;
        };        
    };
};   