
function checkCashRegister(price, cash, cid) {
    var change = [];
    // Here is your change, ma'am.
    var cidObj = cid.reduce(function (acc, x) {
        acc[x[0]] = x[1];
        return acc;
    }, {});
    ///////////////////////////////////////////////////
    function changee(rest, X, val) {

        var divX = Math.floor(rest / X);

        if (cidObj[val] - divX * X > 0) {
            change.push([val, divX * X]);
            //console.log(change);
            return Math.fround( rest - divX * X);
        }
        else {
            change.push([val, cidObj[val]]);
           // console.log(change);
            return rest - cidObj[val];
        }
    }
    ///////////////////////////////////////////

    var diff = cash - price;
    var sumReg = cid.reduce(function (acc, elem) {
        return acc + elem[1];
    }, 0);
    if (sumReg < diff) {
        return "Insufficient Funds";
    }
    if (sumReg === diff) {
        return "Closed";
    }

    if (diff >= 100) {
        var rest100 = changee(diff, 100, "ONE HUNDRED");
    }
    else {
        var rest100 = diff;
    }
    if (rest100 >= 20) {
        var rest20 = changee(rest100, 20, "TWENTY");
    }
    else {
        var rest20 = rest100;
    }
    if (rest20 >= 10) {
        var rest10 = changee(rest20, 10, "TEN");
    }
    else {
        var rest10 = rest20;
    }
    if (rest10 >= 5) {
        var rest5 = changee(rest10, 5, "FIVE");
    }
    else {
        var rest5 = rest10;
    }
    if (rest5 >= 1) {
        var rest1 = changee(rest5, 1, "ONE");
    }
    else {
        var rest1 = rest5;
    }
    if (rest1 >= 0.25) {
        var restQ = changee(rest1, 0.25, "QUARTER");
    }
    else {
        var restQ = rest1;
    }
    if (restQ >= 0.1) {
        var restD = changee(restQ, 0.1, "DIME");
    }
    else {
        var restD = restQ;
    }
    if (restD >= 0.05) {
        var restN = changee(restD, 0.05, "NICKEL");
    }
    else {
        var restN = restD;
    }
    if (restN >= 0.01) {
        var restP = changee(restN, 0.01, "PENNY");
        if(restP >0){
            return"Insufficient Funds";
        }
    }
   /* else {
        var restP = restN;
    }*/

                        

                    
                
            

        

    



    


return change;

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));