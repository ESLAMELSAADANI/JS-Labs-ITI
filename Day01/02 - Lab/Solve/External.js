console.log(result01.toPrecision(6));//32.0000
console.log(result02);//10
console.log(result03);//NAN



//Q9 - Receive from user 2 values using dialoge methods then print them as string or sum them if we can convert these values

var value01 = prompt("Enter first value");
var value02 = prompt("Enter second value");

if (value01 != null && value02 != null && value01 != "" && value02 != "" /*&& !isNaN(value01) && !isNaN(value02)*/) {
        var result04 = parseInt(value01) + parseInt(value02);
        console.log(result04);
}
else {
    result04 = value01 + value02;
    console.log(result04);
}


//Q10
        var num1 = parseFloat(prompt("Enter number 1:"));
        var num2 = parseFloat(prompt("Enter number 2:"));
        var num3 = parseFloat(prompt("Enter number 3:"));
        var num4 = parseFloat(prompt("Enter number 4:"));
        var num5 = parseFloat(prompt("Enter number 5:"));

        console.log("Numbers with 5 digits (toFixed):");
        if( isNaN(num1) ) num1 = 0;
        if( isNaN(num2) ) num2 = 0;
        if( isNaN(num3) ) num3 = 0;
        if( isNaN(num4) ) num4 = 0;
        if( isNaN(num5) ) num5 = 0;
        if(num1 == '') num1 = 0;
        if(num2 == '') num2 = 0;
        if(num3 == '') num3 = 0;
        if(num4 == '') num4 = 0;
        if(num5 == '') num5 = 0;
        console.log(num1.toFixed(5) + ", " + num2.toFixed(5) + ", " + num3.toFixed(5) + ", " + num4.toFixed(5) + ", " + num5.toFixed(5));
        // console.log(num2.toFixed(5));
        // console.log(num3.toFixed(5));
        // console.log(num4.toFixed(5));
        // console.log(num5.toFixed(5));