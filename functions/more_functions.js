
// function displayMailingLabel
function displayMailingLabel(firstName, address, city, state, zip) {
    console.log(firstName)
    console.log(address);
    console.log(city +  state + zip);

}

// function addNumbers 
function addNumbers(num1, num2) {
    let numbersAddition= num1 + num2;
    console.log(num1 + "+" + num2 + "=" + numbersAddition);
}

// function displayReceipt 
function displayReceipt(totalDue, amountPaid){
    console.log("Total Due: $" + totalDue);
    console.log("Amount Paid: $" + amountPaid);

    let changeDue = totalDue - amountPaid;

    console.log("\nChange Due: $" + changeDue);
} 

displayMailingLabel("Cesar", "300 E House","Phoenix", "Arizona", "85009" );
addNumbers(3,4);
displayReceipt(10, 5);
