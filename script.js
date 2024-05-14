let count = 0;
let cursorupgradeCost = 100;
let fishingupgradeCost = 1500;
let boatupgradeCost = 11000;
let godupgradeCost = 999999;
let clickValue = 1;

function incrementCount() {
    count += clickValue;
    document.getElementById("count").innerHTML = Math.round(count);
    if (count>=cursorupgradeCost) {
        document.getElementById("cursorcost").style.color = "#51f345";
    } else {
        document.getElementById("cursorcost").style.color = "#ff0000";
    }
    if (count>=fishingupgradeCost) {
        document.getElementById("fishingcost").style.color = "#51f345";
    } else {
        document.getElementById("fishingcost").style.color = "#ff0000";
    }
    if (count>=boatupgradeCost) {
        document.getElementById("boatcost").style.color = "#51f345";
    } else {
        document.getElementById("boatcost").style.color = "#ff0000";
    }
    if (count>=godupgradeCost) {
        document.getElementById("godcost").style.color = "#51f345";
    } else {
        document.getElementById("godcost").style.color = "#ff0000";
    }
}

function cursorupgrade() {
    if (count >= cursorupgradeCost) {
        count -= cursorupgradeCost;
        cursorupgradeCost *= 1.2;
        clickValue += 2; 
        document.getElementById("count").innerHTML = Math.round(count);
        document.getElementById("cursorcost").innerHTML = "🍤 " + Math.round(cursorupgradeCost);
    } else {
        alert("Not enough cookies to upgrade!");
    }
}

function fishingupgrade() {
    if (count >= fishingupgradeCost) {
        count -= fishingupgradeCost;
        fishingupgradeCost *= 1.2;
        clickValue += 10; 
        document.getElementById("count").innerHTML = Math.round(count);
        document.getElementById("fishingcost").innerHTML = "🍤 " + Math.round(fishingupgradeCost);
    } else {
        alert("Not enough cookies to upgrade!");
    }
}

function boatupgrade() {
    if (count >= boatupgradeCost) {
        count -= boatupgradeCost;
        boatupgradeCost *= 1.2;
        clickValue += 100; 
        document.getElementById("count").innerHTML = Math.round(count);
        document.getElementById("boatcost").innerHTML = "🍤 " + Math.round(boatupgradeCost);
    } else {
        alert("Not enough cookies to upgrade!");
    }
}

function godupgrade() {
    if (count >= godupgradeCost) {
        count -= godupgradeCost;
        godupgradeCost *= 1.2;
        clickValue += 1000; 
        document.getElementById("count").innerHTML = Math.round(count);
        document.getElementById("godcost").innerHTML = "🍤 " + Math.round(godupgradeCost);
    } else {
        alert("Not enough cookies to upgrade!");
    }
}