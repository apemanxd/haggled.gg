var constFee = 0;
var percentage = 0;

let something = false;

function removeHRClass() {
	$(document).ready(function () {
		$("hr").removeClass();
	});
	something = true;
	console.log("once");
}

function functionOnce() {
	if (!something) removeHRClass();
}

function calculate() {

    // Get input values
    var desiredReceiveAmount = parseFloat(document.getElementById("input").value); // Amount the user wants to receive

    var feePercentage = parseFloat(document.getElementById("percentageInput").value) / 100; // Percentage fee (e.g., 10%)
    var minimumFee = parseFloat(document.getElementById("constInput").value); // Minimum constant fee (e.g., 15)

    // Calculate the percentage-based fee
    var percentageBasedFee = desiredReceiveAmount * feePercentage;

    // Determine which fee to apply (the higher of the percentage-based fee or minimum constant fee)
    var appliedFee;
    var requiredSendAmount;

    if (percentageBasedFee > minimumFee) {
        // Use the percentage-based fee and calculate the total amount to send accordingly
        appliedFee = percentageBasedFee;
        requiredSendAmount = Math.ceil(desiredReceiveAmount / (1 - feePercentage));
    } else {
        // Use the minimum constant fee
        appliedFee = minimumFee;
        requiredSendAmount = Math.ceil(desiredReceiveAmount + appliedFee);
    }

    // Format numbers for display
    var requiredSendAmountFormatted = requiredSendAmount.toFixed(2);
    var formattedReceiveAmount = Number(desiredReceiveAmount).toLocaleString("en-EN").split(/\s/).join(',');
	var simpleReceiveAmount = (desiredReceiveAmount-appliedFee)

    // Prepare the output strings for display
    var exchangeDetailsString, feeCalculationString;

    if (desiredReceiveAmount >= 1000000) {
        exchangeDetailsString = "YOU CRAZYYY";
        feeCalculationString = "PM me on https://t.me/haggled for special pricing and instructions 💛";
    } else {
        // Display the exchange amount, applied fee, and required send amount
        exchangeDetailsString = "Exchange amount: <strong>$" + formattedReceiveAmount + "</strong><br><span id='small'>The Fee: <strong>$" + appliedFee.toFixed(2) + "</strong></span>" + "<br>Receive amount: $" + simpleReceiveAmount;
        feeCalculationString = 
                               "To receive $" + formattedReceiveAmount + " you need to send ~ $" + requiredSendAmountFormatted;
    }

    // Update HTML elements with the calculated values
    document.getElementById("price").innerHTML = exchangeDetailsString;
    document.getElementById("crypto").innerHTML = feeCalculationString;
}






function alertFees() {
	alert("The fees for each payment method\nCrypto = $" + CryptoConstFees + "\nNB! All prices listed includes the fees.");
}