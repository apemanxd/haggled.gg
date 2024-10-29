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
    var requiredSendAmountFormatted = requiredSendAmount;
    var formattedReceiveAmount = (desiredReceiveAmount);
	var simpleReceiveAmount = (desiredReceiveAmount-appliedFee);
    var simplefee = requiredSendAmountFormatted-desiredReceiveAmount;

    // Prepare the output strings for display
    var exchangeDetailsString, feeCalculationString;

    if (desiredReceiveAmount >= 1000000) {
        exchangeDetailsString = "YOU CRAZYYY";
        feeCalculationString = "PM me on https://t.me/haggled for special pricing and instructions 💛";
    } else {

        /*OLD CODE:
        // Display the exchange amount, applied fee, and required send amount
        exchangeDetailsString = "Exchange amount: <strong>$" + formattedReceiveAmount + "</strong><br><span id='small'>The Fee: <strong>$" + appliedFee.toFixed(2) + "</strong></span>" + "<br>Receive amount: $" + simpleReceiveAmount;
        feeCalculationString = 
                               "To receive $" + formattedReceiveAmount + " you need to send ~ $" + requiredSendAmountFormatted;
        */

        // Display the exchange amount, applied fee, and required send amount with table formatting
        exchangeDetailsString = `
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="text-align: left;">Exchange amount:</td>
                    <td style="text-align: right;"><strong>$ ${formattedReceiveAmount.toFixed(2)}</strong></td>
                </tr>
                <tr>
                    <td style="text-align: left;">The Fee:</td>
                    <td style="text-align: right;"><strong>$ ${appliedFee.toFixed(2)}</strong></td>
                </tr>
                <tr>
                    <td style="text-align: left;">Receive amount:</td>
                    <td style="text-align: right;"><strong>$ ${simpleReceiveAmount.toFixed(2)}</strong></td>
                </tr>
            </table>`;

        // Display the amount needed to send to receive the desired amount, also in table format for alignment
        feeCalculationString = `<hr>
            <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                <tr>
                    <td style="text-align: left;">To receive:</td>
                    <td style="text-align: right;"><strong>$ ${formattedReceiveAmount.toFixed(2)}</strong></td>
                </tr>
                <tr>
                    <td style="text-align: left;">You need to send:</td>
                    <td style="text-align: right;"><strong>$ ${requiredSendAmountFormatted.toFixed(2)}</strong></td>
                </tr>
                <tr>
                    <td style="text-align: left;">The Fee:</td>
                    <td style="text-align: right;"><strong>$ ${simplefee.toFixed(2)}</strong></td>
                </tr>
            </table>`;

    }

    // Update HTML elements with the calculated values
    document.getElementById("price").innerHTML = exchangeDetailsString;
    document.getElementById("crypto").innerHTML = feeCalculationString;
}






function alertFees() {
	alert("The fees for each payment method\nCrypto = $" + CryptoConstFees + "\nNB! All prices listed includes the fees.");
}