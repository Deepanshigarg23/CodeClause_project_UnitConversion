console.log("Unit conversions");

let kilometerBtn = document.querySelector(".km");
let meterBtn = document.querySelector(".m");
let centimeterBtn = document.querySelector(".cm");
let millimeterBtn = document.querySelector(".mm");
let footBtn = document.querySelector(".foot");
let inchBtn = document.querySelector(".inch");


let mminput = document.getElementById("mminp");
let cminput = document.getElementById("cminp");
let minput = document.getElementById("minp");
let kminput = document.getElementById("kminp");
let footinput = document.getElementById("footinp");
let inchinput = document.getElementById("inchinp");
let result = document.getElementById("result");

millimeterBtn.addEventListener("click", function() {
    let cmTOMm = cminput.value * 10;
    let mTOMm = minput.value * 100 * 10;
    let kmTOMm = kminput.value * 1000 * 100 * 10;
    let footTOMm = footinput.value * 304.8;
    let inchTOMm = inchinput.value * 25.4;
    let mmTOMm = kminput.value;

    if (cminput.value) {
        result.value = `${cmTOMm}mm`;
        minput.value = "";
        kminput.value = "";
        footinput.value = "";
        inchinput.value = "";
        mminput.value = "";

    } else if (minput.value) {
        result.value = `${mTOMm}mm`;
        cminput.value = "";
        kminput.value = "";
        footinput.value = "";
        inchinput.value = "";
        mminput.value = "";
    } else if (kminput.value) {
        result.value = `${kmTOMm}mm`;
        minput.value = "";
        cminput.value = "";
        footinput.value = "";
        inchinput.value = "";
        mminput.value = "";
    }
    else if (footinput.value) {
        result.value = `${footTOMm}mm`;
        minput.value = "";
        cminput.value = "";
        kminput.value = "";
        inchinput.value = "";
        mminput.value = "";

    }
    else if (inchinput.value) {
        result.value = `${inchTOMm}mm`;
        minput.value = "";
        cminput.value = "";
        kminput.value = "";
        footinput.value = "";
        mminput.value = "";
    }
    else if (mminput.value) {
        result.value = `${mmTOMm}mm`;
        minput.value = "";
        cminput.value = "";
        footinput.value = "";
        inchinput.value = "";
        kminput.value = "";
    }
});

centimeterBtn.addEventListener("click", function() {
    let mmTOCm = mminput.value / 10;
    let mTOCm = minput.value * 100;
    let kmTOCm = kminput.value * 1000 * 100;
    let footTOCm = footinput.value * 30.48;
    let inchTOCm = inchinput.value * 2.54;
    let cmTOCm = kminput.value;

    if (mminput.value) {
        result.value = `${mmTOCm}cm`;
        minput.value = "";
        kminput.value = "";
        footinput.value = "";
        inchinput.value = "";
        cminput.value = "";
    } else if (minput.value) {
        result.value = `${mTOCm}cm`;
        mminput.value = "";
        kminput.value = "";
        footinput.value = "";
        inchinput.value = "";
        cminput.value = "";
    } else if (kminput.value) {
        result.value = `${kmTOCm}cm`;
        minput.value = "";
        mminput.value = "";
        footinput.value = "";
        inchinput.value = "";
        cminput.value = "";
    }
    else if (footinput.value) {
        result.value = `${footTOCm}cm`;
        minput.value = "";
        mminput.value = "";
        kminput.value = "";
        inchinput.value = "";
        cminput.value = "";
    }
    else if (inchinput.value) {
        result.value = `${inchTOCm}cm`;
        minput.value = "";
        mminput.value = "";
        kminput.value = "";
        footinput.value = "";
        cminput.value = "";
    }
    else if (cminput.value) {
        result.value = `${cmTOCm}cm`;
        minput.value = "";
        mminput.value = "";
        footinput.value = "";
        inchinput.value = "";
        kminput.value = "";
    }

});

meterBtn.addEventListener("click", function() {
    let mmTOM = mminput.value / 1000;
    let cmTOM = minput.value / 100;
    let kmTOM = kminput.value * 1000;
    let footTOM = footinput.value / 3.281;
    let inchTOM = inchinput.value / 39.37;
    let mTOM = kminput.value;

    if (mminput.value) {
        result.value = `${mmTOM}m`;
        cminput.value = "";
        kminput.value = "";
        footinput.value = "";
        inchinput.value = "";
        minput.value = "";
    } else if (cminput.value) {
        result.value = `${cmTOM}m`;
        mminput.value = "";
        kminput.value = "";
        footinput.value = "";
        inchinput.value = "";
        minput.value = "";
    } else if (kminput.value) {
        result.value = `${kmTOM}m`;
        cminput.value = "";
        mminput.value = "";
        footinput.value = "";
        inchinput.value = "";
        minput.value = "";
    }
    else if (footinput.value) {
        result.value = `${footTOM}m`;
        cminput.value = "";
        mminput.value = "";
        kminput.value = "";
        inchinput.value = "";
        minput.value = "";
    }
    else if (inchinput.value) {
        result.value = `${inchTOM}m`;
        cminput.value = "";
        mminput.value = "";
        kminput.value = "";
        footinput.value = "";
        minput.value = "";
    }
    else if (minput.value) {
        result.value = `${mTOM}m`;
        cminput.value = "";
        mminput.value = "";
        footinput.value = "";
        inchinput.value = "";
        kminput.value = "";
    }

});

kilometerBtn.addEventListener("click", function() {
    let mmTOKm = mminput.value / 1000000;
    let cmTOKm = minput.value / 100000;
    let mTOKm = minput.value / 1000;
    let footTOKm = footinput.value / 3281;
    let inchTOKm = inchinput.value / 39370;
    let kmTOKm = kminput.value;

    if (mminput.value) {
        result.value = `${mmTOKm}km`;
        cminput.value = "";
        minput.value = "";
        footinput.value = "";
        inchinput.value = "";
        kminput.value = "";
    } else if (cminput.value) {
        result.value = `${cmTOKm}km`;
        mminput.value = "";
        minput.value = "";
        footinput.value = "";
        inchinput.value = "";
        kminput.value = "";
    } else if (minput.value) {
        result.value = `${mTOKm}km`;
        cminput.value = "";
        mminput.value = "";
        footinput.value = "";
        inchinput.value = "";
        kminput.value = "";
    }
    else if (footinput.value) {
        result.value = `${footTOKm}km`;
        cminput.value = "";
        mminput.value = "";
        minput.value = "";
        inchinput.value = "";
        kminput.value = "";
    }
    else if (inchinput.value) {
        result.value = `${inchTOKm}km`;
        cminput.value = "";
        mminput.value = "";
        minput.value = "";
        footinput.value = "";
        kminput.value = "";
    }
    else if (kminput.value) {
        result.value = `${kmTOKm}km`;
        minput.value = "";
        cminput.value = "";
        footinput.value = "";
        inchinput.value = "";
        mminput.value = "";
    }

});

footBtn.addEventListener("click", function() {
    let mmTOFoot = mminput.value / 304.8;
    let cmTOFoot = minput.value / 30.48;
    let mTOFoot = minput.value * 3.281;
    let kmTOFoot = kminput.value * 3281;
    let inchTOFoot = inchinput.value / 12;
    let footTOFoot = kminput.value;

    if (mminput.value) {
        result.value = `${mmTOFoot}foot`;
        cminput.value = "";
        minput.value = "";
        kminput.value = "";
        inchinput.value = "";
        footinput.value = "";
    } else if (cminput.value) {
        result.value = `${cmTOFoot}foot`;
        mminput.value = "";
        minput.value = "";
        kminput.value = "";
        inchinput.value = "";
        footinput.value = "";
    } else if (minput.value) {
        result.value = `${mTOFoot}foot`;
        cminput.value = "";
        mminput.value = "";
        kminput.value = "";
        inchinput.value = "";
        footinput.value = "";
    }
    else if (kminput.value) {
        result.value = `${kmTOFoot}foot`;
        cminput.value = "";
        mminput.value = "";
        minput.value = "";
        inchinput.value = "";
        footinput.value = "";
    }
    else if (inchinput.value) {
        result.value = `${inchTOFoot}foot`;
        cminput.value = "";
        mminput.value = "";
        kminput.value = "";
        minput.value = "";
        footinput.value = "";
    }
    else if (footinput.value) {
        result.value = `${footTOFoot}foot`;
        minput.value = "";
        cminput.value = "";
        mminput.value = "";
        kminput.value = "";
        inchinput.value = "";
        
    }

});

inchBtn.addEventListener("click", function() {
    let mmTOInch = mminput.value / 25.4;
    let cmTOInch = cminput.value / 2.54;
    let mTOInch = minput.value * 39.37;
    let kmTOInch = kminput.value * 39370;
    let footTOInch = footinput.value * 12;
    let inchTOInch = kminput.value;

    if (mminput.value) {
        result.value = `${mmTOInch}inch`;
        cminput.value = "";
        minput.value = "";
        kminput.value = "";
        footinput.value = "";
        inchinput.value = "";
    } else if (cminput.value) {
        result.value = `${cmTOInch}inch`;
        mminput.value = "";
        minput.value = "";
        kminput.value = "";
        footinput.value = "";
        inchinput.value = "";
    } else if (minput.value) {
        result.value = `${mTOInch}inch`;
        cminput.value = "";
        mminput.value = "";
        kminput.value = "";
        footinput.value = "";
        inchinput.value = "";
    }
    else if (kminput.value) {
        result.value = `${kmTOInch}inch`;
        cminput.value = "";
        mminput.value = "";
        minput.value = "";
        footinput.value = "";
        inchinput.value = "";
    }
    else if (footinput.value) {
        result.value = `${footTOInch}inch`;
        minput.value = "";
        cminput.value = "";
        mminput.value = "";
        kminput.value = "";
        inchinput.value = "";
        
    }else if (inchinput.value) {
        result.value = `${inchTOInch}inch`;
        cminput.value = "";
        mminput.value = "";
        kminput.value = "";
        minput.value = "";
        footinput.value = "";
    }

});