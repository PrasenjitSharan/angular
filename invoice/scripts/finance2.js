angular.module('finance2', [])
	.factory('currencyConverter', function() {
		var currencies = ['USD', 'EUR', 'INR'];
		var usdToForeignRates = {
			USD: 1,
			EUR: 0.74,
			INR: 60
		};
		var convert = function (amount, inCurr, outCurr) {
			return amount usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
		};

		return {
			currencies: currencies,
			convert: convert
		};
	});