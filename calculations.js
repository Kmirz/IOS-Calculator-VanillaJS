const operation = () => {

    if(calculateFlag){
        totalValue = calculate(calculateFlag, displayValue, secondaryValue);
    }

    secondaryValue = displayValue;
    displayValue = "";

    calculateFlag = buttonValue;

    console.log(calculateFlag);

    display_div.innerHTML = 0;    

};

const calculate = (type, displayValue, secondaryValue) => {

    switch(type) {
        case "÷":
            console.log(`Display value is ${displayValue} and secondary value is ${secondaryValue}`);
            return Math.floor(parseInt(secondaryValue)/parseInt(displayValue));

        case "X":
            console.log(`Display value is ${displayValue} and secondary value is ${secondaryValue}`);
            return Math.floor(parseInt(secondaryValue)*parseInt(displayValue));

        case "+":
            console.log(`Display value is ${displayValue} and secondary value is ${secondaryValue}`);
            return Math.floor(parseInt(secondaryValue) + parseInt(displayValue));

        case "-":
            console.log(`Display value is ${displayValue} and secondary value is ${secondaryValue}`);
            return Math.floor(parseInt(secondaryValue) - parseInt(displayValue));

        default:
            console.log("Unexpected Value Provided");
      }

};