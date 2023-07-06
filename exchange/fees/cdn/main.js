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

function calculate(input) {
	functionOnce();
	Price = Math.ceil(input);
	percentage = (document.getElementById("percentageInput").value) / 100;
	constFee = parseInt(document.getElementById("constInput").value);

	finalFee = ((percentage) * (Price + constFee)) + constFee;
	finalFee = finalFee.toFixed(2);

	finalPrice = Price - finalFee;
	finalPrice = finalPrice.toFixed(2);

	TotalCrypto = finalPrice;

	finalWithFees = Price + (parseInt(finalFee));

	var FinalLetter = input;
	FinalLetter = Number(FinalLetter).toLocaleString("en-EN").split(/\s/).join(',');


	if (input >= 10000) {
		var TotalPriceString = "YOU CRAZYYY";
		var cryptoString = "PM me on https://t.me/TGapeman for special pricing and instructions";
	}


	else {
		var TotalPriceString = "Exchange amount: " + "<strong>$" + FinalLetter + "</strong>" + "<br><span id='small'>The Fee: <strong> $" + finalFee + "</strong></span>";
		var cryptoString = "<strong>Receive:</strong> Amount you will receive ~ $" + TotalCrypto + "<br><strong>Pay:</strong> If you want $" + FinalLetter + ", then you have to send ~ $" + (finalWithFees);
	}

	document.getElementById("price").innerHTML = TotalPriceString;
	document.getElementById("crypto").innerHTML = cryptoString;

}

function alertFees() {
	alert("The fees for each payment method\nCrypto = $" + CryptoConstFees + "\nNB! All prices listed includes the fees.");
}