/* 
AH = Ampare per Hour;
v = Volt
w = Watts
pf = Power Fector

Require:-
    AH, v, Load


load = 300w;
pf = .8;
w = (load / pf);
v = 12;

useableBattery = .7 or 70% //for leadAcid

dischargingCurrent = (w / v);

batteryBackup = (batteryAH / dischargingCurrent);

//Note: We can use only 70% of Lead Acid Battery
useable = (batteryBackup * 70) / 100;
or
useable = (batteryBackup * .7);

minutes = (60 * .2);
*/

let batteryAH = 150;
let pf = .8;
let load = 300;
let v = 12;

function calculate(b, p, l, volt){
    let w = (l / p);
    let dischargingCurrent = (w / volt);
    let batteryBackup = (b / dischargingCurrent);
    let useable = (batteryBackup * .7);
    console.log(useable);
}

calculate(batteryAH, pf, load, v)