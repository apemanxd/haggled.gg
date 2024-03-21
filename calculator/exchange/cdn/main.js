

var constFee= 10;
var percentage=10/100;


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
	if (input < 10000) {
		var Price = Math.ceil(((input)));

	}

	var finalFee = ((percentage)*(Price+constFee))+constFee;
	var finalPrice = Price-finalFee;
	finalFee = finalFee.toFixed(2);
	finalPrice = finalPrice.toFixed(2);
	TotalCrypto = finalPrice;
	TotalPaypal = finalPrice;

	var FinalLetter = input;
	FinalLetter = Number(FinalLetter).toLocaleString("en-EN").split(/\s/).join(',');

	if (input >= 100000) {
		var TotalPriceString = "YOU CRAZYYY";
		var cryptoString = "I do not do deals over 100k";
		var paypalString = "Please contact me directly on Telegram or discord for further inquiries";
		
	}


	else {
		var TotalPriceString = "Exchange amount: " + "<strong>$" + FinalLetter + "</strong>" + "<br><span id='small'>The Fee: <strong> $" + finalFee + "</strong></span>";
		var cryptoString = "<strong>Crypto ⇄ Crypto:</strong> You will receive ~ $" + TotalCrypto;
		var paypalString = "<strong>CRYPTO → PAYPAL/E-TRANSFER/WISE:</strong> You will receive ~ $" + TotalCrypto;
	
	}


	document.getElementById("price").innerHTML = TotalPriceString;
	document.getElementById("crypto").innerHTML = cryptoString;
	document.getElementById("paypal").innerHTML = paypalString;

}

function alertFees(){
	alert("The fees for each payment method\nCrypto = $"+CryptoConstFees+"\nNB! All prices listed includes the fees.");
}