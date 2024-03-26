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
		var creditInput = parseFloat(document.getElementById("input").value);
		var percentage = parseFloat(document.getElementById("percentageInput").value);
		var constFee = parseFloat(document.getElementById("constInput").value);
	
		// Calculate final fee with credit fees
		var finalFee = (creditInput * 100) / (100 - percentage);
		finalFee = Math.ceil(finalFee);
	
		// Calculate prices
		var finalPrice = ((constFee * finalFee) / 1000).toFixed(2);
		var withoutFees = ((creditInput * constFee) / 1000).toFixed(2);
		var withoutFeesCredit = (creditInput * ((100 - percentage) / 100));
		var withCreditFeeMoney = ((withoutFeesCredit * constFee) / 1000).toFixed(2);
		var withCreditFeeCredit = Math.ceil((withoutFeesCredit * ((100 - percentage) / 100)));
	
		// Create output strings
		var totalPriceString, cryptoString;
	
		if (creditInput >= 100000000) {
			totalPriceString = "YOU CRAZY";
			cryptoString = "PM me on <a href='https://t.me/TGapeman/'>t.me/TGapeman</a> for special pricing and instructions 💛";
		} else {
			totalPriceString = "Credit amount: <strong>©" + creditInput + "</strong> | <span id='small'>With sending fees: <strong>©" + finalFee + "</strong></span>";
			cryptoString = "<strong>Option 1:</strong> Pay $" + finalPrice + " to send ©" + finalFee + " and receive ©" + creditInput +
				"<br><strong>Option 2:</strong> Pay $" + withoutFees + " to send ©" + creditInput + " and receive ©" + withoutFeesCredit;
				/*"<br><strong>Option 3:</strong> Pay $ " + withCreditFeeMoney + " to send ©" + withoutFeesCredit + " and receive ©" + withCreditFeeCredit;*/
		}
	
		// Update HTML
		document.getElementById("price").innerHTML = totalPriceString;
		document.getElementById("crypto").innerHTML = cryptoString;
	}
	

function alertFees() {
	alert("The fees for each payment method\nCrypto = $" + CryptoConstFees + "\nNB! All prices listed includes the fees.");
}