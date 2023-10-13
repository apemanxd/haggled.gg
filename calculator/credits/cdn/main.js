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
	Price = (input);
	percentage = (document.getElementById("percentageInput").value);
	constFee = parseFloat(document.getElementById("constInput").value);

	//Credit with fees
	finalFee = (Price*100)/(100-percentage);
	finalFee = finalFee.toFixed(2);
	finalFee = Math.ceil(finalFee);

	//Price with credit fees covered
	finalPrice = ((constFee*finalFee)/1000).toFixed(2);
	totalPrice = finalPrice;

	//Price without credit fees covered
	withoutFees = ((input*constFee)/1000).toFixed(2);
	withoutFeesCredit = (input*((100-percentage)/100));

	//Price for withoutcredit fees
	withcreditfeeMoney= (withoutFeesCredit*constFee)/1000;
	withcreditfeeCredit= (withoutFeesCredit*((100-percentage)/100)).toFixed(2);



	if (input >= 2000000) {
		var TotalPriceString = "YOU CRAZY";
		var cryptoString = "PM me on <a href='https://t.me/TGapeman/'>t.me/TGapeman</a> for special pricing and instructions 💛";
	}


	else {
		var TotalPriceString = "Credit amount: " + "<strong>©" + input + "</strong>" + " | <span id='small'>With sending fees: <strong> ©" + finalFee + "</strong></span>";
		var cryptoString = "<strong>Option 1:</strong> Pay $" + totalPrice + " to send ©" + finalFee + " and receive ©"+ input + 
		"<br><strong>Option 2:</strong> Pay $" + withoutFees + " to send ©" + input +" and receive ©" + withoutFeesCredit +
		"<br><strong>Option 3:</strong> Pay $ " + withcreditfeeMoney + " to send ©" + withoutFeesCredit +" and receive ©" + withcreditfeeCredit;
	}

	document.getElementById("price").innerHTML = TotalPriceString;
	document.getElementById("crypto").innerHTML = cryptoString;

}

function alertFees() {
	alert("The fees for each payment method\nCrypto = $" + CryptoConstFees + "\nNB! All prices listed includes the fees.");
}