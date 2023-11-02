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

		// Function logic
		var inputAmount = parseFloat(document.getElementById("input").value);
		var roundedPrice = Math.ceil(inputAmount);
		
		var percentage = parseFloat(document.getElementById("percentageInput").value) / 100;
		var constFee = parseFloat(document.getElementById("constInput").value);
		
		var finalFee = ((percentage) * (roundedPrice + constFee)) + constFee;
		var finalPrice = roundedPrice - finalFee;
		var totalCrypto = finalPrice.toFixed(2);
		
		var finalWithFees = (roundedPrice + parseFloat(finalFee)).toFixed(2);
		
		// Format input amount with commas
		var formattedInput = Number(inputAmount).toLocaleString("en-EN").split(/\s/).join(',');
	
		var TotalPriceString, cryptoString;
	
		if (inputAmount >= 100000) {
			TotalPriceString = "YOU CRAZYYY";
			cryptoString = "PM me on https://t.me/TGapeman for special pricing and instructions 💛";
		} else {
			TotalPriceString = "Exchange amount: <strong>$" + formattedInput + "</strong><br><span id='small'>The Fee: <strong>$" + finalFee.toFixed(2) + "</strong></span>";
			cryptoString = "<strong>Receive:</strong> Amount you will receive ~ $" + totalCrypto + "<br><strong>Pay:</strong> If you want $" + formattedInput + ", then you have to send ~ $" + finalWithFees;
		}
	
		// Update HTML elements
		document.getElementById("price").innerHTML = TotalPriceString;
		document.getElementById("crypto").innerHTML = cryptoString;
	}

function alertFees() {
	alert("The fees for each payment method\nCrypto = $" + CryptoConstFees + "\nNB! All prices listed includes the fees.");
}