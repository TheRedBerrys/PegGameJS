function OriginalRuleset() {
	this.description = "One Lower";
	
	this.canMove = function(index, current) {
        for (i = 1; i < index - 1; i++)
			if (current[i])
				return false;

		if (!current[index - 1])
			return false;

		return true;
	}
}

function FactorRuleset() {
	this.description = "Factors";
	
	this.canMove = function(index, current) {
		for (i = 1; i < index; i++)
			if ((index % i == 0) !== current[i])
				return false;

		return true;
	}
}

function SumsRuleset() {
	this.description = "Sums";
	
	this.canMove = function(index, current) {
		if (index < 3)
			return true;

		var sum = 0;
		for (i = 1; i < index; i++)
			if (current[i])
				sum += i;

		return (sum === index);
	}
}

function OddEvenRuleset() {
	this.description = "Odds and Evens";
	
	this.canMove = function(index, current) {
		var numOn = current.filter(function(value) { return value; }).length + 1;
		return (numOn % 2 === index % 2);
	}
}

function TwoLowerRuleset() {
	this.description = "Two Lower";
	
	this.canMove = function(index, current) {
		if (index === 1)
			return true;

		for (i = 1; i < index - 2; i++)
			if (current[i])
				return false;

		if (!current[index - 2])
			return false;

		if (current[index - 1])
			return false;

		return true;
	}
}

function Rulesets() {
	return [new OriginalRuleset(), new FactorRuleset(), new SumsRuleset(), new OddEvenRuleset(), new TwoLowerRuleset()];
}