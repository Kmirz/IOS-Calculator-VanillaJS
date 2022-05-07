let logger = (event) => {

    let isButton = event.target.tagName === 'BUTTON';

    if(isButton) {

        let buttonValue = event.target.innerHTML;

        switch(true) {
            case buttonValue === "C":
                displayValue = '';
                secondaryValue = '';
                totalValue = '';
                calculateFlag=false;
        
                display_div.innerHTML = "0";
            break;

            case buttonValue === `←`:
                displayValue = displayValue.substring(0,displayValue.length-1);
        
                display_div.innerHTML = displayValue;
            break;

            case buttonValue === `÷`:
                
                if(calculateFlag){
                    totalValue = calculate(calculateFlag, displayValue, secondaryValue);
                }
            
                secondaryValue = displayValue;
                displayValue = "";
            
                calculateFlag = buttonValue;
            
                display_div.innerHTML = 0;    
            break;

            case buttonValue === `X`:
                if(calculateFlag){
                    totalValue = calculate(calculateFlag, displayValue, secondaryValue);
                }
            
                secondaryValue = displayValue;
                displayValue = "";
            
                calculateFlag = buttonValue;
            
                display_div.innerHTML = 0;    
            break;
            
            case buttonValue === `+`:
                if(calculateFlag){
                    totalValue = calculate(calculateFlag, displayValue, secondaryValue);
                }
            
                secondaryValue = displayValue;
                displayValue = "";
            
                calculateFlag = buttonValue;
            
                display_div.innerHTML = 0;    
            break;

            case buttonValue === `-`:
                if(calculateFlag){
                    totalValue = calculate(calculateFlag, displayValue, secondaryValue);
                }
            
                secondaryValue = displayValue;
                displayValue = "";
            
                calculateFlag = buttonValue;
            
                console.log(calculateFlag);
            
                display_div.innerHTML = 0;    
            break;
            
            case buttonValue === "=":
                // console.log("= Button Clicked");

                if(calculateFlag){
                    totalValue = calculate(calculateFlag, displayValue, secondaryValue);

                    displayValue = totalValue;

                    display_div.innerHTML = displayValue;

                }

                calculateFlag = false;
            break;

            case parseInt(buttonValue) >= 0:
                    // console.log("Button Clicked" + parseInt(buttonValue));
                
                    displayValue = `${displayValue}${parseInt(buttonValue)}`;
                    display_div.innerHTML = displayValue;
              break;

            default:
                console.log("Unexpected Value Provided");
          }
    return;
    }
};